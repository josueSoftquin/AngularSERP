using AngularSERP.Server.Controllers;
using AngularSERP.Server.Data;
using AngularSERP.Server.Models;
using AngularSERP.Server.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace AngularSERP.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            ///Addin all services
            builder.Services.AddScoped<IJWTService, JWTService>();

            builder.Services.AddDbContext<Context>(options => {
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
            });

            //defining our IdentityCore Service
            builder.Services.AddIdentityCore<User>(options => {

                //password configuration
                options.Password.RequiredLength = 6;
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;

                //options to confirm user by email
                options.SignIn.RequireConfirmedEmail = true;
            })
                .AddRoles<IdentityRole>() // to be able to add roles
                .AddRoleManager<RoleManager<IdentityRole>>() // to be able to create roles
                .AddEntityFrameworkStores<Context>() //  providing our context
                .AddSignInManager<SignInManager<User>>() // made use of Signin manager
                .AddUserManager<UserManager<User>>() // to be able to create users
                .AddDefaultTokenProviders(); // to be able to create tokens

            //to be able to authenticate users using JWT
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        //validate token based on the key we have in appsettings JWT:Key
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"])),
                        ValidIssuer = builder.Configuration["JWT:Issuer"],
                        ValidateIssuer = true,
                        // this don't validate audience (angular side)
                        ValidateAudience = false
                    };
                });

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            //Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            //Adding UseAuthentication into our pipeline and this should come before UseAuthorization
            //Authentication verifies the identity of a user of service, and authorization determines their access rights
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            //app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
