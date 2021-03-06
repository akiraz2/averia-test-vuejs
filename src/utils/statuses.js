const statuses =
[
    {
        id: 1,
        title: 'to do',
        color: '#7BB5E0'
    }, {
        id: 2,
        title: 'in progress',
        color: '#7a688b'
    }, {
        id: 3,
        title: 'done',
        color: '#499e0b'
    }
];

export default statuses;

/**
 * делаем из массива объект - получать цвет статуса по ключу быстрее
 * @type {{}}
 */
export const statusesColor = statuses.reduce((acc, item) => {
    acc[item.id] = item.color;
    return acc;
}, {});
