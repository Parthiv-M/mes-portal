const Participant = require('../../models/Participant');
const { sgMailer } = require('../../utils/sgMailer');

const registerParticipant = async (req, res) => {
    try {
        const date = new Date();
        offset = (60 * 5 + 30) * 60 * 1000;
        var ISTTime = new Date(date.getTime() + offset);
        timeStamp = ISTTime;
        const {
            name,
            teamName,
            college,
            yearOfStudy,
            phoneNum,
            email,
            regNum,
            regEvents
        } = req.body
        let participant = await Participant.findOne({ regNum });
        if(participant){
            if(regEvents.some(item => participant.regEvents.includes(item))) {
                return res
                    .status(400)
                    .json({ 
                        success: false, 
                        message: "You have already registered for one or more of the events" 
                    })
            } else {
                participant.timeStamp = timeStamp;
                regEvents.forEach(element => {
                    participant.regEvents.push(element)
                })
                participant.isUpdated = true;
                participant.isUpdatedCount = participant.isUpdatedCount + 1 
            }
        } else {
            const newParticipant 
            = new Participant({
                name,
                teamName,
                college,
                yearOfStudy,
                phoneNum,
                email,
                regNum,
                regEvents
            });
            await newParticipant.save();
        }   
        let eventString = "";
        regEvents.forEach((element, index) => {
            if(index !== regEvents.length - 1){
                eventString += (element + ", ")
            } else {
                eventString += element
            }
        });
        const data = {
            receiver: email,
            sender: "parthivmenon01@gmail.com",
            templateName: "register",
            event_names: eventString,
            name: name
        }
        sgMailer(data)
        newParticipant.mailSent = true;
        await newParticipant.save()
        res.status(200).json({ success: true, message: "You have registered successfully!" })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error"
        })
    }
}

module.exports = { registerParticipant }