<template>
    <div class="container mx-auto">
        <div class="mx-4 sm:mx-8">

            <h1 class="text-4xl mb-8 mt-20 font-semibold">Bijzondere Breinen V6</h1>
            
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
                            <input type="image" onerror="this.onerror=null;this.src='https://via.placeholder.com/1x1.png';" v-for="item in category.items" :key="item" :id="`${category.text}-${item.title}`" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer focus:ring-4 ring-black outline-none" @click="select($event)"/>
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
                    <img src="../public/img/1.png" alt="Score 1" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/2.png" alt="Score 2" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/3.png" alt="Score 3" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/up.png" alt="Score up" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/down.png" alt="Score down" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/diamond.png" alt="Score diamond" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/hourglass.png" alt="Score hourglass" draggable="false" @click="changeIcon($event)">
                </div>                                              
                <!-- Download PDF and delete icon buttons -->
                <div class="bg-red-400 hover:bg-red-500 cursor-pointer">
                    <img src="../public/img/delete.png" alt="Delete" draggable="false" @click="deleteIcon($event)">
                </div>
                <div @click="downloadPDF" class="bg-blue-400 hover:bg-blue-500 cursor-pointer">
                    <img src="../public/img/download.png" alt="Delete" draggable="false">
                </div>
                <div class="sm:hidden bg-gray-400 lastBox"></div>
            </div>   
        </div>
    </div>
</template>

<script>
import { jsPDF } from "jspdf";

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
                        {title:'Tempo'}, 
                        {title:'Op tijd'}
                    ],
                    get size() {
                        return this.items.length
                    },
                },
                {
                    text: 'Taak',
                    color: 'red',
                    items: [
                        {title:'Kwaliteit'}, 
                        {title:'Uitvoering'}
                    ],
                    get size() {
                        return this.items.length
                    },  
                },
                {
                    text: 'Competentie',
                    color: 'green',
                    items: [
                        {title:'Flexibiliteit'}, 
                        {title:'Focus'}, 
                        {title:'Sociale vaardigheden'}, 
                        {title:'Plannen & organiseren'}, 
                        {title:'Creativiteit'}, 
                        {title:'Analytisch vermogen'}, 
                        {title:'Zorgvuldigheid'}, 
                        {title:'Impulsiviteit'}, 
                        {title:'Doorzettingsvermogen'}, 
                        {title:'Loyaliteit'},
                    ],
                    get size() {
                        return this.items.length
                    },    
                },
                {
                    text: 'Contributie',
                    color: 'blue',
                    items: [
                        {title:'Zelf'}, 
                        {title:'LG'}, 
                        {title:'Team'}
                    ],
                    get size() {
                        return this.items.length
                    },    
                },
                {
                    text: 'Commitment',
                    color: 'orange',
                    items: [
                        {title:'Functie'}, 
                        {title:'LG'}, 
                        {title:'Team'}, 
                        {title:'Organisatie'}
                    ],
                    get size() {
                        return this.items.length
                    },              
                },
                {
                    text: 'Continuïteit',
                    color: 'red',
                    items: [
                        {title:'Leerbaarheid'}, 
                        {title:'Intrinsiek'}, 
                        {title:'Team'}, 
                        {title:'Organisatie'}
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

        // totalItems() {
        //     let totalItems = 0;
        //     for (let category of this.categories) {
        //     totalItems = totalItems + category.items.length;
        //     }
        //     return totalItems;
        // },
    },

    methods: { 
        // Selecting the input
        select(event){
            this.selected = event.currentTarget.id;
            // TEST MOET LATER WEG
            console.log(event.target.id);
        },

        // Changing value of icon
        changeIcon(event){
            this.icon = event.currentTarget.src;
            if(this.selected){
                let el = document.getElementById(this.selected);
                el.src = this.icon;
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

                // Calculates width of category text-element
                var categoryTextWidth = doc.getTextWidth(category.text);

                // Gives category corresponding color
                function categoryColorer(){ 
                    return category.color === 'red' ? '#931B1D' : 
                           category.color === 'orange' ? '#e27126' :
                           category.color === 'green' ? '#008000' :
                           category.color === 'blue' ? '#011993' : ''
                } 
                // Gives item corresponding color
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

                // Looping through items
                for (let item of category.items) {
                    doc.setFont(undefined, 'normal');
                    doc.setFillColor(itemColorer());
                    doc.rect(xMargin + (pdfRow * itemSize), 160, itemSizeSpace, 180, 'F');
                    
                    // Calculates width of item text-element
                    var itemTextWidth = doc.getTextWidth(item.title);
                    console.log(itemTextWidth);
                    doc.text(item.title, xMargin + (pdfRow * itemSize) + itemSize/2 + 2, 250 + (itemTextWidth/2), null, 90); 
                    
                    doc.setFillColor('#e5e7eb');
                    doc.rect(xMargin + (pdfRow * itemSize), 343, itemSizeSpace, itemSizeSpace, 'F');
                    
                    // Image
                    var element = document.getElementById(category.text+"-"+item.title);
                    var src = element.getAttribute('src');

                    if(src !== '/'){
                        var img = new Image()
                        img.src = src;
                        console.log('src', src);
                        doc.addImage(img, 'PNG', xMargin + (pdfRow * itemSize), 343, itemSizeSpace, itemSizeSpace)
                    }
                    pdfRow++;
                }
            }

            // Footer
            doc.rect(0, 400, pdfWidth, 47, 'F');
   
            // PDF Download + file name
            if (this.persNumber) {
                doc.save("Bijzondere Breinen - " + this.persNumber);
            }
            else {
                doc.save("Bijzondere Breinen");
            }
        },
    },
}
</script>

<style scoped>
.lastBox {
    content: "";
    width: 1px;
}
</style>