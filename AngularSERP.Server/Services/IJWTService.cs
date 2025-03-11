using AngularSERP.Server.Models;

namespace AngularSERP.Server.Services
{
    public interface IJWTService
    {
        string CreateJWT(User user);
    }
}
