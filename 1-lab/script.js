
const include = (url) => {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
include('/helper.js');

//fibonachi
const fib = () => {
    let n = document.getElementById('fib_input').value
    let newNum


    if (Number(n)) {
        if (n >= 2){
            newNum = fibNumber(n)
            
        } 
        else {
            alert('Enter number > 2')
            document.getElementById('fib_input').value = ''
            newNum = ''
        }

    } else {
        alert('Enter number please')
        document.getElementById('fib_input').value = ''
        newNum = ''
    }



    document.getElementById('fib_number').innerHTML = newNum
}

const fibNumber = n => {
    let prev = 1
    let next = 1
    for (let i = 3; i <= n; i++) {
        let z = prev + next
        prev = next
        next = z
    }
    return next
}

//task3
const chooseRoom = () => {
    let n = document.getElementById('house_input').value;//n = 4 
    let numRoom = document.getElementById('house_number_input').value;// numroom = 8

    let floatOfRoom = Math.ceil(numRoom / 3)
    let text;
    n = Number(n)

    if (n < 0 || numRoom < 0) {
        text = `Values can\`t be negative`
    } else if (floatOfRoom > n) {
        text = `Your room is not exist`
    } else if (floatOfRoom % 2 !== 0) { //1 3 5
        text = `Your room is on float #${floatOfRoom}`
    } else if (floatOfRoom === n) { // 2 4 6
        text = `Go up to float from #${floatOfRoom - 1} to your float #${floatOfRoom}`
    } else if (floatOfRoom < n) {
        text = `Your room is on #${floatOfRoom} 
        Go down from #${floatOfRoom + 1}
        Go up from #${floatOfRoom - 1}`
    }

    document.getElementById('house_answer').innerHTML = text
}

//task4
const arrayOfMatrix = () => {
    let textPositive = '';
    let textNegative = '';
    const min = -10;
    const max = 10;
    let m = document.getElementById('n_number_input').value;
    let n = document.getElementById('m_number_input').value;
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < m; j++) {
            matrix[i][j] = Math.floor(Math.random() * (max - min)) + min
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] < 0) {
                textNegative += ` ${matrix[i][j]} `
            } else {
                textPositive += ` ${matrix[i][j]} `
            }
        }
    }
    // console.log(matrix)
    document.getElementById('positive_answer').innerHTML = textPositive
    document.getElementById('negative_answer').innerHTML = textNegative

}
const getLessons = () => {
    let group = document.getElementById('group_input').value;
    let date = document.getElementById('date_input').value;
    document.getElementById('group_lessons').innerHTML = '';
    lessons.forEach(lesson => {
        if (lesson.group === group && lesson.weekday === date) {
            let node = document.createElement('li')
            var text = document.createTextNode(`${lesson.name} ${lesson.room} ${lesson.time}`)
            node.appendChild(text)
            document.getElementById('group_lessons').appendChild(node)
        }
    })
}

const MathOperationFlow = (operation) => {
    let a = Number(document.getElementById('a_number_input').value)
    let b = Number(document.getElementById('b_number_input').value)

    if ((!Number(a) && a !== 0) || (!Number(b) && b !== 0)) {
        alert('Write correct values')
        document.getElementById('a_number_input').value = ''
        document.getElementById('b_number_input').value = ''
        return
    }
    if (operation === 'division' && b === 0) {
        alert('Can`t do division by 0')
        document.getElementById('b_number_input').value = ''
        document.getElementById('output').innerHTML = ``
        return
    }

    switch (operation) {
        case 'plus':
            document.getElementById('output').innerHTML = `${a + b}`
            document.getElementById('choosedOperations').innerHTML = `+`
            break;
        case 'minus':
            document.getElementById('output').innerHTML = `${a - b}`
            document.getElementById('choosedOperations').innerHTML = `-`
            break;
        case 'multiply':
            document.getElementById('output').innerHTML = `${a * b}`
            document.getElementById('choosedOperations').innerHTML = `*`
            break;
        case 'division':
            document.getElementById('output').innerHTML = `${a / b}`
            document.getElementById('choosedOperations').innerHTML = `/`
            break;

        default:
            break;
    }
}


//task7

let products = []
const productFlow = (action) => {

    let name = document.getElementById('name_tov_input').value
    let price = document.getElementById('price_tov_input').value
    let number = document.getElementById('number_tov_input').value


    let product = {}
    switch (action) {
        case 'create':
            if (name && price && number) {

                product['name'] = name
                product['price'] = price
                product['number'] = number
                products.push(product)
                document.getElementById('name_tov_input').value = ''
                document.getElementById('price_tov_input').value = ''
                document.getElementById('number_tov_input').value = ''
            }
            break;
        case 'show':
            let tableElem = '';
            products.forEach((prod, index) => {
                tableElem += ` <tr>
                <th scope="row">${index + 1}</th>
                <td>${prod.name}</td>
                <td>${prod.price}</td>
                <td>${prod.number}</td>
              </tr>`

            })
            // document.getElementById("table").style.display = "none";
            document.getElementById('table_head').innerHTML = `<tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col">Number</th>
                                                                </tr>`
            document.getElementById('table_body').innerHTML = tableElem

            break;

        default:
            break;
    }

}


//task8
const sentenceInfo = () => {
    let sentence = document.getElementById('sentence_textarea').value
    let vowels = 0;
    let other = 0;
    let massiveOfWords = sentence.split(' ')
    let newSentence = massiveOfWords.map(word => {
        return firstLetterUppercase(word)
    }).join(' ')

    document.getElementById('newSentance').innerHTML = newSentence

    for (let i = 0; i < sentence.length; i++) {
        ((/^[aeiouєэауї]$/i).test(sentence[i]))
            ? vowels++
            : other++
    }
    (vowels > other)
        ? document.getElementById('get_vowels').innerHTML = 'Vowels amount is bigger '
        : document.getElementById('get_vowels').innerHTML = 'Consonants amount is bigger '
}

const firstLetterUppercase = (input) => {
    for (i = 1; i < input.length; i += 2) {
        input = input.substr(0, i) + input[i].toUpperCase() + input.substr(i + 1);
    }
    return input;
}