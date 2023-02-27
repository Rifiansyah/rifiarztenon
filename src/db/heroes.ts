import db from '$db/mongo'

export const heroes = db.collection('heroes')