const tmpBString =

    Vue.component('components-b-part', {
        data: function () {
            return {
                message: "I am component B's  message"
            }
        },
        template: `<template><div>{{message}}</div> </template>`
    })