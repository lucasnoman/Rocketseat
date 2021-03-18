const Database = require('./db.js');
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: 'Lucas Noman',
        avatar: 'https://avatars2.githubusercontent.com/u/25907570?s=460&u=babd10ec5b6f28aeaa9c8480b2cb3e2146b53601&v=4',
        whatsapp: "33991362397",
        bio: "Estudante de web dev."
    }

    classValue = {
        subject: 1,
        cost: "35"
        // O proffy id virá pelo BD
    }

    classScheduleValues = [
        // class_id viorá pelo BD após cadastrarmos a claass
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {
    //     proffyValue,
    //     classValue,
    //     classScheduleValues
    // })

    // Consultar dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectedProffys);

    // consultar as classes de um determinado professor e trazer junto os dados dele
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);
    // console.log(selectClassesAndProffys);

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules);
})