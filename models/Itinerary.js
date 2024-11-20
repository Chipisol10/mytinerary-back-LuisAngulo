import { Schema,model } from "mongoose";

let collection = 'itineraries'
let schema = new Schema ({
    name:{type:String,required:true},
    photo:{type:String,required:true},
    price:{type:Number,required:true},
    duration:{type:String,required:true},
    likes:{type:String,required:true},
    hashtags:{type:String,required:true},
    city:{type: Schema.Types.ObjectId, ref:"cities", required: true}
},{
    timestamps:true
})

let Itinerary = model(collection,schema)
export default Itinerary