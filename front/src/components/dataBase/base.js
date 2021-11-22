export const base = [
    {
        name: "Предназначение",
        fields: [
            'id: bigNumber',
            'Военного назначения: boolean'
        ]
    },
    {
        name: "Двигатель",
        fields: [
            'id: bigNumber',
            'Количество цилиндров: number',
            'Система управления: varchar(20)',
        ]
    },
    {
        name: "Автопилот",
        fields: [
            'id: bigNumber',
            'Руль высоты: boolean',
            'Руль направления: boolean',
            'Отсчет пройденного расстояния: boolean',
            'Отключение двигателя: boolean',
            'Сброс крыльев: boolean',
        ]
    },
    {
        name: "БПЛА",
        fields: [
            'Наименование: varchar(40)',
            'Пропеллер: bigNumber',
            'Двигатель: bigNumber',
            'Автопилот: number',
            'Камера: bigNumber',
            'Пульт управления: bigNumber',
            'Аккумулятор: bigNumber',
            'Предназначение: bigNumber'
        ]
    },
    {
        name: "Стартовые значения",
        fields: [
            'id: bigNumber',
            'Высота: number',
            'Количество оборотов: number'
        ]
    },
    {
        name: "Пульт управления",
        fields: [
            'id: bigNumber',
             'Дальность передачи сигнала: number',
             'Геометрические размеры:  number',
             'Масса: number',
             'Время работы: number'
        ]
    },
    {
        name: "Камера",
        fields: [
            'id: bigNumber',
             'Качество изображения: number',
             'Битрейт: number',
             'Mps: float'
        ]
    },
    {
        name: "Аккумулятор",
        fields: [
            'id: bigNumber',
             'Емкость: number',
             'Напряжение: number',
             'Энергоемкость: number',
             'Макс. мощность зарядки: number',
             'Мин. время зарядки: number',
             'Масса: number',
             'Тип аккумулятора: varchar(20)'

        ]
    },
    {
        name: "Приемо-передатчик",
        fields: [
            'id: bigNumber',
             'Частота: number',
             'Дальность передачи: number',
             'Модель: varchar(20)'
        ]
    },
    {
        name: "Пропеллер",
        fields: [
            'id: bigNumber',
             'Диаметр: number',
             'Материал: varchar(20)'
        ]
    }

    
]