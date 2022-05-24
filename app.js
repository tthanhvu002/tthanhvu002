document.querySelector('.table-wrap').style.height = document.querySelector('table').offsetHeight + 'px'

const items = document.querySelectorAll('.nav .item')
Array.from(items).map((item,index) => {
    
    item.onclick = () => {
        Array.from(items).map(i => {
            if(i.classList.contains('active')){
                i.classList.remove('active')
            }
        })
        item.classList.add('active')
        switch (index) {
            case 0:
                document.querySelector('.VQMM').scrollIntoView({ behavior: 'smooth', block: 'center' })
                break;
            case 1:
                    document.querySelector('.thele').scrollIntoView({ behavior: 'smooth', block: 'center' })
                    break;
            case 2:
                document.querySelector('.ds').scrollIntoView({ behavior: 'smooth', block: 'center' })
                break;
            case 3:
                document.querySelector('.faq').scrollIntoView({ behavior: 'smooth', block: 'center' })
                break;
            case 4:
                document.querySelector('.contact').scrollIntoView({ behavior: 'smooth', block: 'center' })
                break;
            default:
                break;
        }
    }
    
})
