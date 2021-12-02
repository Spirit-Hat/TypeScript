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

      let email = component.NewForm.controls['email']

      email.setValue('njnn')
      expect(component.EmailErrors()).toBe('Incorrect email')

      email.setValue(' ')
      expect(component.EmailErrors()).toBe('Incorrect email')

      email.setValue('')
      expect(component.EmailErrors()).toBe('Need to fill')

      email.setValue('Test@')
      expect(component.EmailErrors()).toBe('Incorrect email')

      email.setValue('Test@Ukr.net')
      expect(component.EmailErrors()).toBe('')
    });

    it('Check Login', () => {

      const nativeElement = fixture.nativeElement;

      let Login = component.NewForm.controls['Login']

      Login.setValue('')
      expect(component.LoginErrors()).toBe('Need to fill')

      Login.setValue(' ')
      expect(component.LoginErrors()).toBe('You can use a-Z')

      Login.setValue('aa')
      expect(component.LoginErrors()).toBe('You can use a-Z')

      Login.setValue('aaaaaaaaaaaaaaaaaaaaa')
      expect(component.LoginErrors()).toBe('You can use a-Z')

    });

    it('Check Password', () => {

      const nativeElement = fixture.nativeElement;

      let Password = component.NewForm.controls['password']

      Password.setValue('')
      expect(component.PasswordErrors()).toBe('Need to fill')

      Password.setValue(' ')
      expect(component.PasswordErrors()).toBe('You can use a-Z')

      Password.setValue('aa')
      expect(component.PasswordErrors()).toBe('You can use a-Z')

      Password.setValue('aaaaaaaaaaaaaaaaaaaaa')
      expect(component.PasswordErrors()).toBe('You can use a-Z')

    });

    it('Check RepeatPassword', () => {

      const nativeElement = fixture.nativeElement;

      let RepeatPassword = component.NewForm.controls['Repeatpassword']

      RepeatPassword.setValue('')
      expect(component.RepeatErrors()).toBe('Need to fill')

      RepeatPassword.setValue(' ')
      expect(component.RepeatErrors()).toBe('You can use a-Z')

      RepeatPassword.setValue('aa')
      expect(component.RepeatErrors()).toBe('You can use a-Z')

      RepeatPassword.setValue('aaaaaaaaaaaaaaaaaaaaa')
      expect(component.RepeatErrors()).toBe('You can use a-Z')

    });



  });

});
