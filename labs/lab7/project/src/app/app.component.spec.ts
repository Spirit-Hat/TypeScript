import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should create New Form ', () => {
    const NewForm = component.NewForm
    console.log(NewForm)
    const NewFormValues = {
      Login: null,
      email: null,
      password: null,
      Repeatpassword: null
    }
    expect(NewForm.value).toEqual(NewFormValues)
  });

  it('get Login ', () => {
    const NewForm = component.NewForm
    expect(NewForm.get('Login')).toEqual(component.Login)
  });
  it('get email ', () => {
    const NewForm = component.NewForm
    expect(NewForm.get('email')).toEqual(component.email)
  });
  it('get password ', () => {
    const NewForm = component.NewForm
    expect(NewForm.get('password')).toEqual(component.password)
  });
  it('get repeat ', () => {
    const NewForm = component.NewForm
    expect(NewForm.get('Repeatpassword')).toEqual(component.repeat)
  });

  it('Check Disable button', () => {
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#submit-button');
    expect(button.disabled).toBeTruthy();
  });
  describe('Check Input', () =>{

    it('Check Email', () => {
      const nativeElement = fixture.nativeElement;
      //nativeElement.querySelector('#email');
      expect( nativeElement.querySelector('#email').placeholder).toBe('Enter Email');
      component.NewForm.Login = 'njnn'
      fixture.detectChanges();
      expect(nativeElement.querySelector('#EmailErrors').textContent).toBe('Enter')
    });

  });

});
