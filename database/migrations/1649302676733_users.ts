import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nombre').notNullable()
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
