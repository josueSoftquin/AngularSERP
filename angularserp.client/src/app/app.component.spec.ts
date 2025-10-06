import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Datalula'`,() => {
    expect(component.title).toEqual('Datalula Portal');
  });

  it('Should render the router outlet',() => {
    fixture.detectChanges();
    const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });
  
});