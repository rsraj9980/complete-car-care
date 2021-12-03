require('dotenv').config();
require('./config/database');

const Service = require('./models/service');

// IIFE - Immediately Invoked Function Expression
(async function() {
    await Service.deleteMany({});
    const services = await Service.create([
        {
            name: "Ceramic Coating",
            desc: "Ceramic coating is an industry-grade chemical polymer solution that is applied to the exterior of your car, so that is it is protected from any external paint damage. Sometimes it is referred to as Nano ceramic coating. It provides a layer of protection between the elements and your paint.",
            sortOrder: 10
        },
        {
            name: "Paint Protection Film",
            desc: "Paint protection film (PPF, also called clear bra, clear film or clear paint film) is a thermoplastic urethane often self healing film applied to painted surfaces of a new or used car in order to protect the paint from stone chips, bug splatters, and minor abrasions.",
            sortOrder: 20

        },
        {
            name:"Paint Correction",
            desc:"Paint correction is done to remove swirls and micro scratches as well as oxidation and haze on paint. Paint correction takes several hours including all of the prep work to wash and clay before starting.",
            sortOrder: 30
        },
        {
            name:"Car wash",
            desc:"We offer Car wash and detailing services. It includes interior, exterior and full package services which includes both. We use high quality brushes and soap which are safe for car paint and other materials.",
            sortOrder: 40
        },
        {
            name:"Window Tinting",
            desc:"We offer high quality window tinting, by using 3M tinting film(recommended). The tint film is offered in different light blocking percentages.",
            sortOrder: 50
        },
        {
            name:"Vinyl Wraping",
            desc:"A vehicle vinyl wrap describes the automotive aftermarket practice of completely or partially covering a vehicle's original paint with a vinyl wrap of a different color, and sometimes the same color with a differing finish like a gloss, matte or clear protective layer.",
            sortOrder: 60
        },
        {
            name:"Paintless Dent Removal",
            desc:"Paintless dent repair (PDR), also known as paintless dent removal, describes a method of removing minor dents from the body of a motor vehicle. A wide range of damage can be repaired using paintless dent repair as long as the paint surface is intact. Paintless dent repair may be used on both aluminum and steel panels.",
            sortOrder: 70
        }
    ]);

console.log(services)

process.exit();

})();