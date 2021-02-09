
const include = (url) => {
    var script = document.createElement('script')
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
}
include('/helperFile.js')

//task2
const fib = () => {
    let n = getValue('fib_input')
    let newNum
    try { // !Number(0) === true
        if (!Number(n) && Number(n) !== 0) throw new Error('Enter number please')
        if( n < 2) throw new Error('Enter number > 2')
            newNum = fibNumber(n)
    } catch (e) {
        alert(e.message)
        setValue('fib_input', '')
        newNum = ''
    }
    document.getElementById('fib_number').innerHTML = newNum
    setHTML('fib_number', newNum)
}

const fibNumber = n => {
    let fibArray = [1, 1]
    let prev = 1
    let next = 1
    for (let i = 3; i <= n; i++) {
        let z = prev + next
        prev = next
        next = z
        fibArray.push(next)
    }
    return fibArray
}

//task3

//n = 7 numRoom = 14 --> floatOfRoom = 5
//n = 7 numRoom = 11 --> floatOfRoom = 4  5-down/3-up 
//n = 7 numRoom = 20 --> floatOfRoom = 20

const chooseRoom = () => {
    let n = getValue('house_input')
    let numRoom = getValue('house_number_input')

    let floatOfRoom = Math.ceil(numRoom / 3)
    let text;
    n = Number(n)
try{
    if ((!Number(n) && Number(n) !== 0 )|| (!Number(numRoom) && Number(numRoom) !== 0 )) throw new Error('Enter number please')
    if (n < 0 || numRoom < 0) throw new Error(`Values can\`t be negative`)
    if (floatOfRoom > n) throw new Error(`Your room is not exist`)
    if (floatOfRoom % 2 !== 0) {
        text = `Your room is on float #${floatOfRoom}`
    } else if (floatOfRoom === n) {
        text = `Go up to float from #${floatOfRoom - 1} to your float #${floatOfRoom}`
    } else if (floatOfRoom < n) {
        text = `Your room is on #${floatOfRoom} <br>
        Go down from #${floatOfRoom + 1} <br> or <br>
        Go up from #${floatOfRoom - 1}`
    }
}catch(e){
        alert(e.message)
        setValue('house_input', '')
        setValue('house_number_input', '')
        text = ''
}
    setHTML('house_answer', text)
}

//task4
const arrayOfMatrix = () => {
    setHTML('matrix_output', '')
    let textPositive = ''
    let textNegative = ''
    const min = -10
    const max = 10
    let m = getValue('n_number_input') 
    let n = getValue('m_number_input')

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
    matrix.forEach(m => {
        m.forEach(n => {
           document.getElementById('matrix_output').innerHTML += `${n} `
        })
        document.getElementById('matrix_output').innerHTML += '<br>'
    })
   
    console.log(matrix)
    setHTML('positive_answer', textPositive)
    setHTML('negative_answer', textNegative)

}

//task5
const getLessons = () => {
    let group = getValue('group_input') 
    let date = getValue('date_input')
    setHTML('group_lessons', '')
    lessons.forEach(lesson => {
        if (lesson.group === group && lesson.weekday === date) {
            let node = document.createElement('li')
            var text = document.createTextNode(`${lesson.name} ${lesson.room} ${lesson.time}`)
            node.appendChild(text)
            document.getElementById('group_lessons').appendChild(node)
        }
    })
}
//task6
const Calc = (operation) => {
    let a = Number(getValue('a_number_input'))
    let b = Number(getValue('b_number_input'))
    try{
        if ((!Number(a) && a !== 0) || (!Number(b) && b !== 0)) throw new Error('Write correct values')
        if (operation === 'division' && b === 0) throw new Error('Can`t do division by 0')
        switch (operation) {
            case 'plus':
                setHTML('output', `${a + b}`)
                setHTML('choosedOperation', '+')
                break;
            case 'minus':
                setHTML('output', `${a - b}`)
                setHTML('choosedOperation', '-')
                break;
            case 'multiply':
                setHTML('output', `${a * b}`)
                setHTML('choosedOperation', '*')
                break;
            case 'division':
                setHTML('output', `${a / b}`)
                setHTML('choosedOperation', '/')
                break;
            default:
                break;
        }
    }catch(e){
        alert(e.message)
        setValue('a_number_input', '') 
        setValue('b_number_input', '') 
        setHTML('output', '') 
    }
 
}

//task7
let products = []
const productFlow = (action) => {

    let name = getValue('name_tov_input')
    let price = getValue('price_tov_input')
    let number = getValue('number_tov_input')


    let product = {}
    let totalSum = 0
    switch (action) {
        case 'create':
            try{
                if((!Number(price)) || (!Number(number))) throw new Error('Write correct values')
                if(price < 0 || number < 0) throw new Error('Values can`t be negative')

                if (name && price && number) {
                product['name'] = name
                product['price'] = price
                product['number'] = number
                product['sum'] = price * number
                products.push(product)
                setValue('name_tov_input', '')
                setValue('price_tov_input', '')
                setValue('number_tov_input', '')
            }
            }catch(e){
                alert(e.message)
                price < 0 && setValue('price_tov_input', '') 
                number < 0 && setValue('number_tov_input', '') 
               if( e.message === 'Write correct values'){
                   setValue('number_tov_input', '') 
                setValue('price_tov_input', '')
               }
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
                <td>${prod.sum}</td>
              </tr>`
              totalSum += prod.sum

            })
            tableElem += `<tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td>TotalSum</td>
            <td>${totalSum}</td>
          </tr>`
            setHTML('table_head', `<tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Number</th>
            <th scope="col">Sum</th>
        </tr>`)

            setHTML('table_body',  tableElem)
            break;

        default:
            break;
    }

}


//task8
const sentenceInfo = () => {
    let sentence = getValue('sentence_textarea')
    let vowels = 0;
    let other = 0;
    let massiveOfWords = sentence.split(' ')
    let newSentence = massiveOfWords.map(word => {
        return firstLetterUppercase(word)
    }).join(' ')
    setHTML('newSentence', newSentence)

    for (let i = 0; i < sentence.length; i++) {
        ((/^[aeiouєэауї]$/i).test(sentence[i]))
            ? vowels++
            : other++
    }
    (vowels > other)
        ? setHTML('get_vowels', 'Vowels amount is bigger ') 
        : setHTML('get_vowels', 'Consonants amount is bigger ')  
}

const firstLetterUppercase = (input) => {
    for (i = 1; i < input.length; i += 2) {
        input = input.substr(0, i) + input[i].toUpperCase() + input.substr(i + 1);
    }
    return input;
}