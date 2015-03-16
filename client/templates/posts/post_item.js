/**
 * Created by madrid on 15/03/15.
 */
//Hace referencia a un ayudante que pertenece a la plantilla postItem
Template.postItem.helpers({
    //Se declara el ayudante y se le asigna una función anonima
    domain: function() {
        //Se crea un elemento HTML ancla y se asigna en memoria
        var a = document.createElement('a');
        //Se agrega la propiedad href y se le asigna la url del post actual
        a.href = this.url;
        //Retorna solo el inicio de la url gracias a la propiedad hostname
        return a.hostname;
    }
})