const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
const getRandomColor = () => niceColors[Math.floor(Math.random() * niceColors.length)]

for(let li of $("li")){
    $(li).css("background-color", getRandomColor())
    $(li).hover(function(){
        $(this).css("background-color", getRandomColor())
    })
}