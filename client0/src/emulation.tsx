import React from "react";

let trainings = [{
    id: 0,
    name: "Кардио-рывок",
    rows:[{
        time: 5,
        pulsemax: 80,
        pulsemin: 72
    },
    {
        time: 10,
        pulsemax: 100,
        pulsemin: 75
    }]
},{
    id: 1,
    name: "Кардио-релакс",
    rows:[{
        time: 5,
        pulsemax: 79,
        pulsemin: 71
    },
    {
        time: 10,
        pulsemax: 110,
        pulsemin: 70
    }]
},{
    id: 2,
    name: "Восстановление",
    rows:[{
        time: 5,
        pulsemax: 75,
        pulsemin: 70
    },
    {
        time: 10,
        pulsemax: 80,
        pulsemin: 75
    }]
},{
    id: 3,
    name: "Моя тренировка 1",
    rows:[{
        time: 5,
        pulsemax: 80,
        pulsemin: 72
    },
    {
        time: 10,
        pulsemax: 100,
        pulsemin: 75
    }]
},{
    id: 4,
    name: "Моя тренировка 2",
    rows:[{
        time: 5,
        pulsemax: 80,
        pulsemin: 72
    },
    {
        time: 10,
        pulsemax: 100,
        pulsemin: 75
    }]
},{
    id: 5,
    name: "Моя тренировка 3",
    rows:[{
        time: 5,
        pulsemax: 80,
        pulsemin: 72
    },
    {
        time: 10,
        pulsemax: 100,
        pulsemin: 75
    }]
},{
    id: 6,
    name: "Моя тренировка 4",
    rows:[{
        time: 5,
        pulsemax: 80,
        pulsemin: 72
    },
    {
        time: 10,
        pulsemax: 100,
        pulsemin: 75
    }]
}]

let sportsman = [{
	id: 0,
    name: "Достоевский Фёдор Михайлович",
    age: 18,
    size: 178,
    weight: 77,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    trains: [{
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }]
},{
	id: 1,
    name: "Пушкин Александр Сергеевич",
    age: 19,
    size: 180,
    weight: 87,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    trains: [{
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }]
},{
    id: 2,
	name: "Набоков Владимир Владимирович",
    age: 38,
    size: 168,
    weight: 64,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    trains: [{
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }]
},{
	id: 3,
    name: "Пелевин Виктор Олегович",
    age: 23,
    size: 182,
    weight: 72,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    trains: [{
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }]
},{
	id: 4,
    name: "Гоголь Николай Васильевич",
    age: 34,
    size: 179,
    weight: 78,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    trains: [{
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }]
},{
	id: 5,
    name: "Булгаков Михаил Афанасьевич",
    age: 29,
    size: 183,
    weight: 85,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    trains: [{
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }]
},{
    id: 6,
	name: "Чехов Антон Павлович",
    age: 41,
    size: 188,
    weight: 89,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    trains: [{
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }]
}];

let users = [
	{id: 0, login: "admin", password: "admin"},
	{id: 1, login: "user", password: "user"},
	{id: 2, login: "a", password: "a"}
]

export { users, sportsman, trainings };