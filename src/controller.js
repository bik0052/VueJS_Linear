new Vue({
  el: '#standardDeviation',
  data: {
    result:'',
    content:''
  },
  methods: {
    onFileChange(event) {
      Reader.getFiles(event,this)
    },
    parseData(data){
      let xNumbers = data.split('\n')
      let intXNumbers = []
      for(let aNum of xNumbers){
        let intANum = parseInt(aNum)
        if(!isNaN(intANum)){
          intXNumbers.push(intANum)
        }
      }
      this.init(intXNumbers)
    },
    init(xNumbers){
      this.result = new StandardDeviation(xNumbers).init()
    },
    reset(){
      this.result = ''
    }
  }
})

new Vue({
  el: '#linearRegression',
  data: {
    result:''
  },
  methods: {
    onFileChange(event) {
      Reader.getFiles(event,this)
    },
    parseData(data){
      let xNumbers = []
      let yNumbers = []
      let allData = data.split('\n')
      for(let aLine of allData){
        if(aLine.split(',').length < 2){
          continue
        }
        let intX = parseInt(aLine.split(',')[0])
        let intY = parseInt(aLine.split(',')[1])

        if(!isNaN(intX) && !isNaN(intY) ){
          xNumbers.push(intX)
          yNumbers.push(intY)
        }
      }
      this.init(xNumbers,yNumbers)
    },
    init(xNumbers,yNumbers){
      this.result = new LinearRegression(xNumbers,yNumbers).init()
    },
    reset(){
      this.result = ''
    }
  }
})