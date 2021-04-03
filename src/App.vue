<template>

<div class="xlsm:mx-2 sm:mx-6 md:mx-14 xl:mx-24">

    <h1 class="text-4xl mb-8 mt-4 font-semibold">Bijzondere Breinen</h1>
 
    <form>
        <div class="display md:inline-block xl:inline-block">
            <label class="display block font-semibold">Pers. nummer</label>
            <input :v-model="persNumber" type="text" id="p-nummer" name="p-nummer" autocomplete="off" class="bg-gray-200 h-12 w-64 xlsm:w-full sm:w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1 mb-4 pl-2">
        </div>
        <div class="md:display md:inline-block md:ml-4 xl:display xl:inline-block xl:ml-5">
            <label class="display block font-semibold">Datum</label>
            <input type="date" id="p-nummer" name="p-nummer" class="bg-gray-200 h-12 w-64 xlsm:w-full sm:w-full focus:outline-none focus:ring-2 focus:ring-blue-500 pl-2 mt-1">
        </div>
    </form>

    <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-56 items-start">
            <div v-for="category in categories" :key="category.text" class="grid gap-3 grid-cols-footer grid-flow-col-dense text-white mb-3">
                
                <!-- Categorie -->
                <div :class="`relative col-start-1 row-span-${category.size} bg-own${category.color}`">
                    <div class="absolute transform top-1/2 left-1/2 -rotate-90 -translate-x-2/4 -translate-y-2/4 font-bold whitespace-nowrap">{{ category.text }}</div>
                </div>
                
                <!-- Item -->
                <div v-for="item in category.items" :key="item" :class=" `relative col-start-2 h-16 bg-own${category.color}`">
                    <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">{{ item }}</div>
                </div>

                <!-- Input -->
                <input v-for="item in category.items" :key="item" :id="`${category.text}-${item}`" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>  
            </div>
        </div>
        
    </div>

OUDE VARIANT

<!-- <div>Amount of items: {{ category.size }}</div>    
<div :class="`text-${category.color}-500`" >Color: {{ category.color }}</div> -->





    <div class="lg:grid lg:grid-cols-2 gap-x-56 items-start text-white">

        <div class="row1 grid gap-3 grid-cols-footer grid-flow-col-dense mb-3 lg:mb-0">

            <!-- Categories -->
            <div class="relative col-start-1 row-span-2 bg-ownorange">
                <div class="absolute transform top-1/2 left-1/2 -rotate-90 -translate-x-2/4 -translate-y-2/4 font-bold whitespace-nowrap">Tijd</div>
            </div> 
            <div class="relative col-start-1 row-span-2 bg-ownred">
                <div class="absolute transform top-1/2 left-1/2 -rotate-90 -translate-x-2/4 -translate-y-2/4 font-bold whitespace-nowrap">Taak</div>
            </div> 
            <div class="relative col-start-1 row-span-10 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -rotate-90 -translate-x-2/4 -translate-y-2/4 font-bold whitespace-nowrap">Competentie</div>
            </div>

            <!-- Items -->
            <div class="relative col-start-2 h-16 bg-ownorange">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Tempo</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownorange">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Op tijd</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownred">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Kwaliteit</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownred">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Uitvoering</div>
            </div>
            <div class="relative col-start-2 h-16 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Flexibiliteit</div>
            </div>
            <div class="relative col-start-2 h-16 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Focus</div>
            </div>
            <div class="relative col-start-2 h-16 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Sociale vaardigheden</div>
            </div>
            <div class="relative col-start-2 h-16 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Plannen & organiseren</div>
            </div>
            <div class="relative col-start-2 h-16 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Creativiteit</div>
            </div>
            <div class="relative col-start-2 h-16 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Analytisch vermogen</div>
            </div>
            <div class="relative col-start-2 h-16 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Zorgvuldigheid</div>
            </div>
            <div class="relative col-start-2 h-16 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Impulsiviteit</div>
            </div>
            <div class="relative col-start-2 h-16 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Doorzettingsvermogen</div>
            </div>
            <div class="relative col-start-2 h-16 bg-owngreen">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Loyaliteit</div>
            </div>

            <!-- Inputs -->
            
            <input id="tijd1" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="tijd2" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="taak1" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="taak2" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="competentie1" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="competentie2" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="competentie3" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="competentie4" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="competentie5" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="competentie6" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="competentie7" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="competentie8" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="competentie9" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
            <input id="competentie10" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)"/>
           
        </div>
        
      
        <div class="grid gap-3 grid-cols-footer grid-flow-col-dense">   
           
            <!-- Categories --> 
            <div class="relative col-start-1 row-span-3 bg-ownblue">
                <div class="absolute transform top-1/2 left-1/2 -rotate-90 -translate-x-2/4 -translate-y-2/4 font-bold whitespace-nowrap">Contributie</div>
            </div>
            <div class="relative col-start-1 row-span-4 bg-ownorange">
                <div class="absolute transform top-1/2 left-1/2 -rotate-90 -translate-x-2/4 -translate-y-2/4 font-bold whitespace-nowrap">Commitment</div>
            </div>
            <div class="relative col-start-1 row-span-4 bg-ownred">
                <div class="absolute transform top-1/2 left-1/2 -rotate-90 -translate-x-2/4 -translate-y-2/4 font-bold whitespace-nowrap">Continuïteit</div>
            </div>

            <!-- Items -->
            <div class="relative col-start-2 h-16 bg-ownblue">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Zelf</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownblue">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">LG</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownblue">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Team</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownorange">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Functie</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownorange">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">LG</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownorange">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Team</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownorange">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Organisatie</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownred">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Leerbaarheid</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownred">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Intrinsiek</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownred">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">Extrinsiek</div>
            </div>
            <div class="relative col-start-2 h-16 bg-ownred">
                <div class="absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">BRAVO</div>
            </div>

            <!-- Inputs -->
            <input id="contributie1" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
            <input id="contributie2" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
            <input id="contributie3" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
            <input id="commitment1" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
            <input id="commitment2" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
            <input id="commitment3" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
            <input id="commitment4" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
            <input id="continuiteit1" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
            <input id="continuiteit2" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
            <input id="continuiteit3" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
            <input id="continuiteit4" type="image" src="/" alt="" draggable="false" class="col-start-3 bg-gray-400 hover:bg-gray-500 cursor-pointer" @click="select($event)" />
        </div>

    </div>

        <!-- Toolbar -->
        <div class="fixed bottom-0 bg-gray-400 inset-x-0">
            <div class="grid grid-cols-9 gap-3 xlsm:mx-2 sm:mx-6 md:mx-14 xl:mx-24">
                
                <div class="h-12 w-12 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/1.svg" alt="Score 1" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="h-12 w-12 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/2.svg" alt="Score 2" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="h-12 w-12 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/3.svg" alt="Score 3" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="h-12 w-12 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/up.svg" alt="Score up" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="h-12 w-12 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/down.svg" alt="Score down" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="h-12 w-12 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/diamond.svg" alt="Score diamond" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="h-12 w-12 bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <img src="../public/img/hourglass.svg" alt="Score hourglass" draggable="false" @click="changeIcon($event)">
                </div>
                <div class="h-12 w-12 bg-red-400 hover:bg-red-500 cursor-pointer">
                    <img src="../public/img/delete.svg" alt="Delete" draggable="false" @click="deleteIcon($event)">
                </div>
                <div class="h-12 w-12 bg-blue-400 hover:bg-blue-500 cursor-pointer">
                    <img src="../public/img/download.svg" alt="Delete" draggable="false">
                </div>

            </div>
        </div>
</div>

</template>

<script>

export default {
    data() {
        return {
            selected: '',
            icon: '/',
            persNumber: '',
            date: '',
           
            categories: [
                {
                    text: 'Tijd',
                    items: ['Tempo', 'Op tijd'],
                    get size() {
                        return this.items.length
                    },
                    color: 'orange',
                },
                {
                    text: 'Taak',
                    items: ['Kwaliteit', 'Uitvoering'],
                    get size() {
                        return this.items.length
                    },
                    color: 'red',
                },
                {
                    text: 'Competentie',
                    items: ['Flexibiliteit', 'Focus', 'Sociale vaardigheden', 'Plannen & organiseren', 'Creativiteit', 'Analytisch vermogen', 'Zorgvuldigheid', 'Impulsiviteit', 'Doorzettingsvermogen', 'Loyaliteit'],
                    get size() {
                        return this.items.length
                    },
                    color: 'green',
                },
                {
                    text: 'Contributie',
                    items: ['Zelf', 'LG', 'Team'],
                    get size() {
                        return this.items.length
                    },
                    color: 'blue',
                },
                {
                    text: 'Commitment',
                    items: ['Functie', 'LG', 'Team', 'Organisatie'],
                    get size() {
                        return this.items.length
                    },
                    color: 'orange',
                },
                {
                    text: 'Continuïteit',
                    items: ['Leerbaarheid', 'Intrinsiek', 'Team', 'Organisatie'],
                    get size() {
                        return this.items.length
                    },
                    color: 'red',
                },    
            ],
            
            

        }
    },

   
    methods: { 
    //   changeValue(i) {  
    //     if (document.querySelector('.thisisselected')){
    //       if (i == 1) {
    //         this.selectedIcon = '<img src="/img/1.svg" alt="Score 1" class="ready" draggable="false">';
    //       }
    //       else if (i == 2) {
    //         this.selectedIcon = '<img src="/img/2.svg" alt="Score 2" class="ready" draggable="false">';
    //       }
    //       else if (i == 3) {
    //         this.selectedIcon = '<img src="/img/3.svg" alt="Score 3" class="ready" draggable="false">';
    //       }
    //       else if (i == 'up') {
    //         this.selectedIcon = '<img src="/img/up.svg" alt="Score up" class="ready" draggable="false">';
    //       }
    //       else if (i == 'down') {
    //         this.selectedIcon = '<img src="/img/down.svg" alt="Score down" class="ready" draggable="false">';
    //       }
    //       else if (i == 'diamond') {
    //         this.selectedIcon = '<img src="/img/diamond.svg" alt="Score diamond" class="ready" draggable="false">';
    //       }
    //       else if (i == 'hourglass') {
    //         this.selectedIcon = '<img src="/img/hourglass.svg" alt="Score hourglass" class="ready" draggable="false">';
    //       }
    //       else {
    //         this.selectedIcon = '';
    //         document.querySelector('.thisisselected').innerHTML = '';
    //       }
    //     }
    //   },

    // start(e){
    //   if (this.selectedIcon && document.querySelector('.thisisselected')) {
    //     document.querySelector('.thisisselected').innerHTML = this.selectedIcon;
    //   }
    // },

    select(event){
        this.selected = event.currentTarget.id;
    },

    changeIcon(event){
        this.icon = event.currentTarget.src;
        if(this.selected){
            let el = document.getElementById(this.selected);
            el.src = this.icon;
            this.selected = '';
            return this.selected; 
        }
    },

    deleteIcon(event){
        this.icon = event.currentTarget.src;
        if(this.icon){
            let el = document.getElementById(this.selected);
            el.src = '/';
        }
    }

},

  mounted(){
    window.addEventListener('keydown', (e) => {
      if (document.querySelector('.thisisselected')) {
        if (e.key === '1') {
          this.selectedIcon = '<img src="/img/1.svg" alt="Score 1" class="ready" draggable="false">';
        }
        if (e.key === '2') {
          this.selectedIcon = '<img src="/img/2.svg" alt="Score 2" class="ready" draggable="false">';
        }
        if (e.key === '3') {
          this.selectedIcon = '<img src="/img/3.svg" alt="Score 3" class="ready" draggable="false">';
        }
        if (e.key === '4') {
          this.selectedIcon = '<img src="/img/up.svg" alt="Score up" class="ready" draggable="false">';
        }
        if (e.key === '5') {
          this.selectedIcon = '<img src="/img/down.svg" alt="Score down" class="ready" draggable="false">';
        }
        if (e.key === '6') {
          this.selectedIcon = '<img src="/img/diamond.svg" alt="Score diamond" class="ready" draggable="false">';
        }
        if (e.key === '7') {
          this.selectedIcon = '<img src="/img/hourglass.svg" alt="Score hourglass" class="ready" draggable="false">';
        }
        if (e.key === 'Delete' || e.key === 'Backspace') {
          this.selectedIcon = '';
          document.querySelector('.thisisselected').innerHTML = this.selectedIcon;
        }
        if (e.key === 'ArrowRight' && this.selected < 25) {
          this.selected = this.selected + 1
        }
        if (e.key === 'ArrowLeft' && this.selected > 1) {
          this.selected = this.selected - 1
        }
    this.start();
    this.selectedIcon = '';
    }
  });
  
  }
}
</script>

<style scoped>
    .input:focus {
        border: 2px solid black;
    }

    .input img {
        width: 50px;
        height: 50px;
    }
</style>

