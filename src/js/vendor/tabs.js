export class Tabs {
    constructor(tab) {
        let check = document.querySelector(`.${tab.class}`)
        if(check != undefined) {
            this.item = document.querySelector(`.${tab.class}`);
            this.title = this.item.querySelectorAll(".tabs__title");
            this.content = this.item.querySelectorAll(".tabs__item");
            this.count = 1;
            this.countTabs = 1;
            this.setDataAttr();
            this.activFirstTab(); 
        }else{
            return null
        }
        
    }

    setDataAttr() {
        for (const el of this.title) {
            let elClasses = el.className.split(" ");
            elClasses.forEach(it => {
                if (it == "tabs__title") {
                    el.dataset.number = `tab_${this.count} `;
                    this.count++
                }
            })

        }

        for (const el of this.content) {
            el.dataset.number = `tab_${this.countTabs} `;
            this.countTabs++
        }
    }

    activFirstTab() {
        if (this.item) {
            this.title[0].classList.add("active");
            this.content[0].classList.add("active");
            this.addEvents();
        }
    }

    addEvents() {
        let titleBox = this.item.querySelector(".tabs__title-box")
        titleBox.addEventListener("click", (e) => {
            if (e.target.classList.contains("tabs__title")) {
                this.changeActiveTab(e.target)
            }
            else if(e.target.parentElement && e.target.parentElement.classList.contains("tabs__title")) {
                 this.changeActiveTab(e.target.parentElement)
            }
            else if(e.target.parentElement.parentElement && e.target.parentElement.parentElement.classList.contains("tabs__title")) {
                 this.changeActiveTab(e.target.parentElement.parentElement)
            }
        })
    }

    changeActiveTab(e) {
        let number = e.dataset.number

        for (const el of this.title) {
            el.classList.remove("active");
        }

        e.classList.add("active")


        for (const el of this.content) {
            let data = el.dataset.number
            el.classList.remove("active")
            if (number === data) {
                el.classList.add("active")
            }
        }

    }
}