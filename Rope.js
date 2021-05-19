class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:275
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    fly(){
        this.rope.bodyA=null
    }
    attach(body){
        this.rope.bodyA=body
    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position
            var pointB=this.rope.pointB
            push ()
            strokeWeight(3)
            stroke("#301608")
                line(pointA.x,pointA.y,pointB.x,pointB.y) 
            
            pop ()
        }
       
    }
}