let usuario="rondi"
let contrseña="12345"
let user_correct
let contra_correct

let validar_user=prompt("Escriba el usuario")
do
{
    if(user_correct !== usuario)
    {
        validar_user=prompt("Usuario incorrecto. Intente con otro")
    }
    else
    {
        user_correct = validar_user
    }
}while(validar_user !== user_correct  )

let validar_contra = prompt("Escriba la contraseña")
do
{
    if (contra_correct !== contrseña) 
    {
        validar_contra=prompt("Contresaña incorrecta. Intente otra")    
    } 
    else 
    {
        contra_correct = validar_contra
    }
}while( validar_contra !== contra_correct )