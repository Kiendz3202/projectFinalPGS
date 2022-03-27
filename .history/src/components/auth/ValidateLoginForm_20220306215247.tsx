import React from 'react'

export function ValidateEmail(email:string) {
    let isValidated = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    if(isValidated){
        return '';
    }else{
        return 'emailInvalid'
    }
}
export function ValidatePassword(password:string){
    if(password.length >= 6){
        return ''
    }else{
        return 'min length is 6 characters'
    }
}
export default function ValidateLoginForm(email:string,password:string){
    return {
        email:ValidateEmail(email),
        password:ValidatePassword(password)
    }
}

