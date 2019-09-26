class Reader {
  
  static getFiles(event,component){
    let files = event.target.files || event.dataTransfer.files
      if (!files.length)
        return
    Reader.readFile(files[0],component)
  }

  static readFile(file,component){
    let reader = new window.FileReader()
    reader.onload = (event) => {
      component.parseData(event.target.result)
    }
    reader.readAsText(file)
  }
}