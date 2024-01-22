AFRAME.registerComponent("cursor-sensor", {
    schema:{
        selectedItem:{
            default:"",
            type:"string"
        }
    },
    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            const id = this.el.getAttribute("id")
            const comicPlaces = ["superman", "spiderman", "captain-aero", "outer-space"]
            
            if (comicPlaces.includes(id)) {
                const placesContainer = document.querySelector("#posters-container")
                placesContainer.setAttribute("camera-cursor",{
                    selectedItem:id
                })
                this.el.setAttribute("material",{
                    color: "#D76B30",
                    opacity: 1,
                })
            }
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave", ()=>{
            const { selectedItem } = this.data;
            if (selectedItem) {
              const el = document.querySelector(`#${selectedItem}`);
              const id = el.getAttribute("id");
              if (id == selectedItem) {
                el.setAttribute("material", {
                  color: "#0077CC",
                  opacity: 1,
                });
            }
          }
        });
      },
    });
