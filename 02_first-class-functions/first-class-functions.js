{ // объявление
    42;
    { };
    function func() { }
}

{ // создание
    new Number(42);
    new Object();
    new Function();
}

{ // присваивание
    let val = 42;
    let obj = {};
    let func = function () { }; // () => {}
}

{ // элементы массива
    let array = [val, obj, func];
}

{ // свойства объекта
    let stuff = {
        val: 42,
        obj: {},
        func: function() {}
    };
}

{ // аргументы
    console.log(val);
    console.log(obj);
    console.log(func);
}

{ // возврат из фукнции
    function pass(value) {
        return value;
    }

    pass(val);
    pass(obj);
    pass(func);
}