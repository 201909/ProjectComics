AFRAME.registerComponent("comics-posters", {
  init: function() {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function() {

    AFRAME.registerComponent("tour", {
      init: function () {
        this.placesContainer = this.el;
        this.createCards()
      },
    
      poster: function () {
        const thumbNailsRef = [
          {
            id: "superman",
            url: "./assets/posters/superman-poster.jpg"
          },
          {
            id: "spiderman",
            url: "./assets/posters/spiderman-poster.jpg"
          },
          
          {
            id: "captain-aero",
            url: "./assets/posters/captain-aero-poster.jpg"
          },
          {
            id: "outer-space",
            url: "./assets/posters/outer-space-poster.jpg"
          }
          ];
        prevoiusXPosition = -60;
    
        for (var item of thumbNailsRef) {
          const posX = prevoiusXPosition + 25;
          const posY = 10;
          const posZ = -40;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;
    
          const borderEl = this.createBorders(position, item.id)
          
          const imageEl = this.createImages(item)
          borderEl.appendChild(imageEl)
         
          const textEl = this.createText(position, item)
          borderEl.appendChild(textEl)
    
          this.placesContainer.appendChild(borderEl);
        }
      },
      createBorders:function(position, id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)    
        entityEl.setAttribute("visible", true)  
        entityEl.setAttribute("geometry", {primitive:"ring", radiusInner:9, radiusOuter:10})
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {color:"#0077cc", opacity:1})
        return entityEl            
      },
    
      createImages:function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)  
        entityEl.setAttribute("geometry", {primitive:"circle", radius:9})
        entityEl.setAttribute("material", {src:item.url})
        return entityEl            
      },
    
      createText:function(position, item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("text",  {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#e65100",
          value: item.title,
        })    
        entityEl.setAttribute("visible", true)  
        const pos = position
        pos.y = -20
         entityEl.setAttribute("position", pos)
    
        return entityEl            
      }
    });
    
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      const borderEl = this.createBorders(position, item.id)

      const imageEl = this.createImages(item)
      borderEl.appendChild(imageEl)
     
      const textEl = this.createText(position, item)
      borderEl.appendChild(textEl)

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {

    //task 2:- create an entity and store in entityEl as a const
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "#fff" });

    return entityEl;
  },
  createImages:function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)  
    entityEl.setAttribute("geometry", {primitive:"plane", width:22, height:40})
    entityEl.setAttribute("material", {src:item.url})
    return entityEl            
  },
  createText:function(position, item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text",  {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    })    
    entityEl.setAttribute("visible", true)  
    const pos = position
    pos.y = -20
     entityEl.setAttribute("position", pos)

    return entityEl            
  }
});
