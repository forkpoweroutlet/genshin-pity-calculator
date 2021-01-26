Chart.defaults.global.tooltips.custom = function(tooltip) {
    // Tooltip Element
    let hoverDiv = document.getElementById('pie-hover')

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
        hoverDiv.style.opacity = 0
        return
    }

    // Set Text
    if (tooltip.body) {
        let innerHtml = '<tbody>'

        tooltip.body.map(x => x.lines).forEach(function(body) {

            // Get image URL
            let item = body[0]
            item = item.substring(0, item.lastIndexOf(' ') - 1)

            innerHtml += '<tr><td>' + '<img src="https://rerollcdn.com/GENSHIN/' + (items[item].isCharacter ? 'Characters' : 'Weapon/NEW')
                + '/' + item.replace(/ /g, '_') + '.png" style="height: 30%;width:30%;display:inline-block;">' + '<p>' + body + '%</p></td></tr>'
        })
        innerHtml += '</tbody>'

        hoverDiv.querySelector('table').innerHTML = innerHtml
    }

    // Yeah don't touch this
    hoverDiv.style.opacity = 1
    hoverDiv.style.left = this._chart.canvas.offsetLeft + tooltip.caretX + 'px'
    hoverDiv.style.top = this._chart.canvas.offsetTop + tooltip.caretY + 'px'
    
    hoverDiv.style.fontFamily = tooltip._bodyFontFamily
    hoverDiv.style.fontSize = tooltip.bodyFontSize
    hoverDiv.style.fontStyle = tooltip._bodyFontStyle
    hoverDiv.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px'
}

let config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 10, 10, 10, 10, 50],
            backgroundColor: [
                '#ff5555',
                '#95fffa',
                '#50abff',
                '#c179ff',
                '#75ffaf',
                '#000000'
            ],
        }],
        labels: [
            'Diluc',
            'Qiqi',
            'Mona',
            'Keqing',
            'Jean',
            'Albedo'
        ]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false,
        }
    }
}