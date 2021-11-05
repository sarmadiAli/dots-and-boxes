const row = document.getElementsByClassName("row")

const player_turn = document.getElementById("player_turn")
player_turn.innerHTML = "blue"
var gameStatus = true
var clicked = false


const clickHander = (item, line) => {
    item.addEventListener('click', event => {
        var ele = event.target
        if (ele.className === line) {
            ele.className = line + " " + (!gameStatus ? 'red' : 'blue') + " a";
            if (gameStatus) { player_turn.innerHTML = "red" }
            else { player_turn.innerHTML = " blue" }
            gameStatus = !gameStatus
        }

        if (clicked) {
            ele.className = ele.className
            if (gameStatus) { player_turn.innerHTML = "red" }
            else { player_turn.innerHTML = " blue" }
            gameStatus = !gameStatus
            clicked = false

        }
    })

}

const handerLeaveHander = (item, line) => {
    item.addEventListener('mouseleave', event => {
        var ele = event.target

        if (clicked ) {
            ele.className = line

        }

    })
}

const handerEnterhander = (item, line) => {
    item.addEventListener('mouseenter', event => {
        var ele = event.target
        if (ele.className === line) {
            ele.className = ele.className + " " + (!gameStatus ? 'red' : 'blue');
            clicked = true

        }

    })
}


document.querySelectorAll('.horizontal_line').forEach(item => {

    clickHander(item, "horizontal_line")
    handerLeaveHander(item, "horizontal_line")
    handerEnterhander(item, "horizontal_line")

})




document.querySelectorAll('.vertical_line').forEach(item => {
    clickHander(item, "vertical_line")
    handerLeaveHander(item, "vertical_line")
    handerEnterhander(item, "vertical_line")
})