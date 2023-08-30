export default {
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.isIntersecting ? entry.target.classList.add('fade') : entry.target.classList.remove('fade')
            })
        })

        const hiddenElements = document.querySelectorAll('.pre-fade-left, .pre-fade-right, .pre-fade-bottom, .pre-fade-bottom')

        hiddenElements.forEach((el) => observer.observe(el))
    }
}