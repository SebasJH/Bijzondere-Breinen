<template>

<div class="container mx-auto">
    <div class="mx-4 sm:mx-8">

        <h1 @click="testValue" class="text-4xl mb-8 mt-4 font-semibold">Bijzondere Breinen</h1>
        
        <form>
            <div class="flex-col md:flex-row flex md:space-x-12 space-y-4 md:space-y-0 mb-10">
                <div>
                    <label class="block font-semibold">Pers. nummer</label>
                    <input type="text" v-model="persNumber" class="bg-gray-200 focus:bg-gray-300 h-12 w-60 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 pl-2">
                </div>
                <div>
                    <label class="block font-semibold">Datum</label>
                    <input type="date" v-model="date" class="bg-gray-200 focus:bg-gray-300 h-12 w-60 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 pl-2">
                </div>
            </div>
        </form>    
        
        <div class="lg:grid lg:grid-cols-2 gap-x-32 items-start mb-24">
            <div v-for="(item, index) in newArr" :key="index">
                <div class="grid gap-3 grid-cols-footer grid-flow-col-dense text-white text-center mb-3">
                    <template v-for="category in item" :key="category.text">
                    
                        <!-- Category -->
                        <div :class="`relative col-start-1 row-span-${category.size} bg-own${category.color}`">
                            <div class="absolute transform top-1/2 left-1/2 -rotate-90 -translate-x-2/4 -translate-y-2/4 font-bold whitespace-nowrap">{{ category.text }}</div>
                        </div>
                                
                        <!-- Item -->
                        <div v-for="item in category.items" :key="item" :class=" `relative col-start-2 h-16 bg-own${category.color}`">
                            <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">{{ item.title }}</div>
                        </div>

                        <!-- Input -->
                        <input type="image" v-for="item in category.items" :key="item" :id="`${category.text}-${item.title}`" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer focus:ring-4 ring-black outline-none" @click="select($event)"/>  
                    </template>
                </div>
            </div>
        </div>
    </div>    
</div>

<!-- Toolbar -->
<div class="bg-gray-400 fixed bottom-0 inset-x-0">
    <div class="container mx-auto overflow-x-scroll sm:overflow-hidden my-2">
        <div class="grid grid-cols-tool gap-3 mx-4 sm:mx-8">
            <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <img src="../public/img/1.svg" alt="Score 1" draggable="false" @click="changeIcon($event)">
            </div>
            <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <img src="../public/img/2.svg" alt="Score 2" draggable="false" @click="changeIcon($event)">
            </div>
            <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <img src="../public/img/3.svg" alt="Score 3" draggable="false" @click="changeIcon($event)">
            </div>
            <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <img src="../public/img/up.svg" alt="Score up" draggable="false" @click="changeIcon($event)">
            </div>
            <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <img src="../public/img/down.svg" alt="Score down" draggable="false" @click="changeIcon($event)">
            </div>
            <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <img src="../public/img/diamond.svg" alt="Score diamond" draggable="false" @click="changeIcon($event)">
            </div>
            <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <img src="../public/img/hourglass.svg" alt="Score hourglass" draggable="false" @click="changeIcon($event)">
            </div>                                              
            <!-- Download PDF and delete icon buttons -->
            <div class="bg-red-400 hover:bg-red-500 cursor-pointer">
                <img src="../public/img/delete.svg" alt="Delete" draggable="false" @click="deleteIcon($event)">
            </div>
            <div @click="downloadPDF" class="bg-blue-400 hover:bg-blue-500 cursor-pointer">
                <img src="../public/img/download.svg" alt="Delete" draggable="false">
            </div>
            <div class="sm:hidden bg-gray-400 lastBox"></div>
        </div>   
    </div>
</div>

</template>

<script>
import { jsPDF } from "jspdf";
import 'svg2pdf.js';

export default {
    data() {
        return {
            selected: '',
            icon: '/',
            persNumber: '',
            date : new Date().toISOString().slice(0,10),
           
            categories: [
                {
                    text: 'Tijd',
                    color: 'orange',
                    items: [
                        {title:'Tempo', value:''}, 
                        {title:'Op tijd', value:''}
                    ],
                    get size() {
                        return this.items.length
                    },
                },
                {
                    text: 'Taak',
                    color: 'red',
                    items: [
                        {title:'Kwaliteit', value:''}, 
                        {title:'Uitvoering', value:''}
                    ],
                    get size() {
                        return this.items.length
                    },  
                },
                {
                    text: 'Competentie',
                    color: 'green',
                    items: [
                        {title:'Flexibiliteit', value:''}, 
                        {title:'Focus', value:''}, 
                        {title:'Sociale vaardigheden', value:''}, 
                        {title:'Plannen & organiseren', value:''}, 
                        {title:'Creativiteit', value:''}, 
                        {title:'Analytisch vermogen', value:''}, 
                        {title:'Zorgvuldigheid', value:''}, 
                        {title:'Impulsiviteit', value:''}, 
                        {title:'Doorzettingsvermogen', value:''}, 
                        {title:'Loyaliteit', value:''}
                    ],
                    get size() {
                        return this.items.length
                    },    
                },
                {
                    text: 'Contributie',
                    color: 'blue',
                    items: [
                        {title:'Zelf', value:''}, 
                        {title:'LG', value:''}, 
                        {title:'Team', value:''}
                    ],
                    get size() {
                        return this.items.length
                    },    
                },
                {
                    text: 'Commitment',
                    color: 'orange',
                    items: [
                        {title:'Functie', value:''}, 
                        {title:'LG', value:''}, 
                        {title:'Team', value:''}, 
                        {title:'Organisatie', value:''}
                    ],
                    get size() {
                        return this.items.length
                    },              
                },
                {
                    text: 'Continuïteit',
                    color: 'red',
                    items: [
                        {title:'Leerbaarheid', value:''}, 
                        {title:'Intrinsiek', value:''}, 
                        {title:'Team', value:''}, 
                        {title:'Organisatie', value:''}
                    ],
                    get size() {
                        return this.items.length
                    },       
                },     
            ], 
        }
    },

    computed: {
        newArr() {
            return [this.categories.slice(0, this.categories.length/2), this.categories.slice(this.categories.length/2, this.categories.length)]
        },

        totalItems() {
            let totalItems = 0;
            for (let category of this.categories) {
            totalItems = totalItems + category.items.length;
            }
            return totalItems;
        },
    },

    methods: { 
        // Testing purpose
        testValue(){
            console.log("hey");
            console.log(this.categories[0].items[0].value)
        },

        // Selecting the input
        select(event){
            this.selected = event.currentTarget.id;
        },

        // Changing value of icon
        changeIcon(event){
            this.icon = event.currentTarget.src;
            if(this.selected){
                let el = document.getElementById(this.selected);
                el.src = this.icon;
                //this.categories[0].items[0].value = this.icon;
                this.selected = '';
                return this.selected; 
            }
        },

        // Deleting icon
        deleteIcon(event){
            this.icon = event.currentTarget.src;
            if(this.icon){
                let el = document.getElementById(this.selected);
                el.src = '/';
            }
        },

        // Download PDF
        downloadPDF(){
            const doc = new jsPDF({
                orientation: "landscape",
                unit: "px",
            });

            let pdfWidth = doc.internal.pageSize.getWidth();
            let pdfRow = 0;
            let itemAmount = 0;
            let xMargin = 20;
            let whiteSpace = 3;
            let totalItems = 0;
            
            // Counts amount of items
            for (let category of this.categories) {
                totalItems = totalItems + category.items.length;
            }

            let itemSize = (pdfWidth - xMargin * 2) / totalItems;
            let itemSizeSpace = (pdfWidth - xMargin * 2) / totalItems - whiteSpace;

            // Title
            doc.setFont(undefined, 'bold');
            doc.setFontSize(22);
            doc.text("Bijzondere Breinen", xMargin, 40,);

          
                        // doc.svg('/img/1.88884ec6.svg', 15, 40, 100, 100);
                        // doc.svg('/img/1.88884ec6.svg', 15, 40, 100, 100);

                        // var svg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCBAMAAAB4LQ3OAAAAElBMVEUAAAAiIiIbGxseHhodHRv///9+UGmEAAAABHRSTlMADzlEx/oplAAAAAFiS0dEBfhv6ccAAABJSURBVGje7dhBDQAgDACxgQIk4AEL+NfEYw7gsZD0BFTARUjSp7WVjWuh72wSCAQCgUAgEAgEAoFAIBAIBAKBQCgX3s+/JBV3AAgzujXq6GTOAAAAAElFTkSuQmCC'
                        // doc.addSvgAsImage('../public/img/download.svg', 15, 40, 100, 100)

                        // var canvas = document.createElement('canvas');
                        // canvg(canvas, svg);
                        
                        // var imgData = canvas.toDataURL('image/png');
                        // // Generate PDF
                        // doc.addImage(imgData, 'PNG', 40, 40, 75, 75);


            // Persoonsnummer
            doc.setFontSize(14);
            doc.setFont(undefined, 'bold');
            doc.text("Pers. Nummer", xMargin, 70);
            doc.setFont(undefined, 'normal');
            if (this.persNumber) {
                doc.text(this.persNumber, xMargin, 85);
            }
            else {
                doc.text("/", xMargin, 85);    
            }

            // Date
            doc.setFont(undefined, 'bold');
            doc.text("Datum", 175, 70);
            doc.setFont(undefined, 'normal');
            doc.text(this.date, 175, 85);
            
            
            // Looping through categories
            for (let category of this.categories) {
                
                doc.setFont(undefined, 'bold');

                // Bereken width van category text element
                var categoryTextWidth = doc.getTextWidth(category.text);

                // Geeft categorie juiste kleur
                function categoryColorer(){ 
                    return category.color === 'red' ? '#931B1D' : 
                           category.color === 'orange' ? '#e27126' :
                           category.color === 'green' ? '#008000' :
                           category.color === 'blue' ? '#011993' : ''
                } 
                // Geeft item juiste kleur
                function itemColorer(){ 
                    return category.color === 'red' ? '#BB7E7F' : 
                           category.color === 'orange' ? '#E2A984' :
                           category.color === 'green' ? '#71B171' :
                           category.color === 'blue' ? '#717DBB' : ''
                } 
                
                doc.setTextColor('#ffffff');
                doc.setFillColor(categoryColorer());
                doc.rect(xMargin + (itemAmount * itemSize), 132, category.items.length * itemSizeSpace + category.items.length * whiteSpace - whiteSpace, 25, 'F');
                doc.text(category.text, xMargin + (itemAmount * itemSize) + (category.items.length * itemSizeSpace + category.items.length * whiteSpace - whiteSpace)/2 - (categoryTextWidth/2), 147, null);

                itemAmount = itemAmount + category.items.length;

                console.log("Schermbreedte: " + pdfWidth);
                console.log("Breedte van nieuwe area: " + category.items.length * itemSizeSpace);
                console.log("Aantal items gehad:" + itemAmount);
                console.log("Totaal items: " + category.items.length);
                console.log("-------");
                console.log(require("../public/img/1.svg"))


                // Looping through items
                for (let item of category.items) {
                    doc.setFont(undefined, 'normal');
                    doc.setFillColor(itemColorer());
                    doc.rect(xMargin + (pdfRow * itemSize), 160, itemSizeSpace, 180, 'F');
                    
                    // Bereken width van item text element
                    var itemTextWidth = doc.getTextWidth(item.title);
                    console.log(itemTextWidth);
                    doc.text(item.title, xMargin + (pdfRow * itemSize) + itemSize/2 + 2, 250 + (itemTextWidth/2), null, 90); 
                    
                    doc.setFillColor('#e5e7eb');
                    doc.rect(xMargin + (pdfRow * itemSize), 343, itemSizeSpace, itemSizeSpace, 'F');
                    // SVG HIER
                    
                    pdfRow = pdfRow + 1;
                }
            }

            // Footer
            doc.rect(0, 400, pdfWidth, 47, 'F');

            // SVG showen (Laat hier niets van zien)
            const element = document.getElementById('svg');
            console.log(element);
            doc.svg(element, {
                x: 100, 
                y: 100,
                width: 400, 
                height: 400
            });
            
            // PDF Downloaden + file naam 
            if (this.persNumber) {
                doc.save("Bijzondere Breinen - " + this.persNumber);
            }
            else {
                doc.save("Bijzondere Breinen");
            }
        },
    },

// mounted(){
//     window.addEventListener('keydown', (e) => {
//       if (document.querySelector('.thisisselected')) {
//         if (e.key === '1') {
//           this.selectedIcon = '<img src="/img/1.svg" alt="Score 1" class="ready" draggable="false">';
//         }
//         if (e.key === '2') {
//           this.selectedIcon = '<img src="/img/2.svg" alt="Score 2" class="ready" draggable="false">';
//         }
//         if (e.key === '3') {
//           this.selectedIcon = '<img src="/img/3.svg" alt="Score 3" class="ready" draggable="false">';
//         }
//         if (e.key === '4') {
//           this.selectedIcon = '<img src="/img/up.svg" alt="Score up" class="ready" draggable="false">';
//         }
//         if (e.key === '5') {
//           this.selectedIcon = '<img src="/img/down.svg" alt="Score down" class="ready" draggable="false">';
//         }
//         if (e.key === '6') {
//           this.selectedIcon = '<img src="/img/diamond.svg" alt="Score diamond" class="ready" draggable="false">';
//         }
//         if (e.key === '7') {
//           this.selectedIcon = '<img src="/img/hourglass.svg" alt="Score hourglass" class="ready" draggable="false">';
//         }
//         if (e.key === 'Delete' || e.key === 'Backspace') {
//           this.selectedIcon = '';
//           document.querySelector('.thisisselected').innerHTML = this.selectedIcon;
//         }
//         if (e.key === 'ArrowRight' && this.selected < 25) {
//           this.selected = this.selected + 1
//         }
//         if (e.key === 'ArrowLeft' && this.selected > 1) {
//           this.selected = this.selected - 1
//         }
//     this.start();
//     this.selectedIcon = '';
//     }
//   });
  
//   }
}
</script>

<style scoped>
.lastBox {
    content: "";
    width: 1px;
}
</style>