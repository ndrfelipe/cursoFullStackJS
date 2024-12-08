//criar a classe de validação de form e instanciar ela
class FormValidation{
  constructor(){
    this.form = document.querySelector('.formulario');
    this.events();
  }
  events(){
      //método apenas para os eventos.
    this.form.addEventListener('submit', e =>{
      this.handleSubmit(e);
    });
   
  }

  handleSubmit(e){
    e.preventDefault();
    const validFields = this.isValid();
    const validPasswords = this.passwordIsValid();
    if(validFields && validPasswords){
      alert("Usuário cadastrado");
      this.form.submit();
    };  
  }

  

  isValid(){
    let valid = true;

    for(let errorText of this.form.querySelectorAll('.error-text')){
      errorText.remove();
    };

    for(let field of this.form.querySelectorAll('.validar')){
      // pegando o elemento irmão-anterior do input (a label).
      const label = field.previousElementSibling.innerHTML
      if(!field.value){
        this.createError(field, `O campo "${label}" precisa ser preenchido`);
        valid = false;
      }

      //Validação de CPF
      if(field.classList.contains('cpf')) {
        if(!this.validaCPF(field)) valid = false;
      }

      //Validação de Usuário
      if(field.classList.contains('usuario')) {
        if(!this.userValidation(field)) valid = false;
      }
    };

    return valid;
  }

  userValidation(field){
    const user = field.value;
    let valid = true;
    if(user.length < 3 || user.length > 12){
      this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.')
      valid = false;
    }
    if(!user.match(/^[a-zA-Z0-9]+$/g)){
      this.createError(field, 'Nome do Usuário precisa conter apenas letras e/ou números.')
      valid = false;
    }
    return valid;
  }

  validaCPF(field){
    const cpf = new ValidaCPF(field.value);
    if(!cpf.valida()){
      this.createError(field, 'CPF inválido.')
      return false;
    }
    return true;
  }

  passwordIsValid(){
    let valid = true;
    const password = document.querySelector('.senha');
    const repeatedPassword = document.querySelector('.repetir-senha');

    if(password.value !== repeatedPassword.value){
      valid = false;
      this.createError(password, "Campos senha e repetir-senha precisam ser iguais.")
      this.createError(repeatedPassword, "Senha e repetir-senha precisam ser iguais.")
    }
    if(password.value.length < 8 || password.value.length > 24){
      valid = false;
      this.createError(password, "Campos senha precisa ter entre 8 e 24 caracteres.")
    }
    return valid;
  }

  createError(field, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');

    //propriedade que adiciona um elemento após o elemento selecionado
    field.insertAdjacentElement('afterend', div);
  }

}

const form = new FormValidation();