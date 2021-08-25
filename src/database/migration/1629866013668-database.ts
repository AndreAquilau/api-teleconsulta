import { MigrationInterface, QueryRunner } from 'typeorm';

export class database1629866013668 implements MigrationInterface {
    name = 'database1629866013668';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "public"."clientes" ("id" SERIAL NOT NULL, "nome_completo" character varying(255) NOT NULL, "cpf" character varying(255), "celular" character varying(255), "telefone" character varying(255), "sexo" character(1), "data_nascimento" character varying(255), "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "pkey_id_cliente" ON "public"."clientes" ("id") `,
        );
        await queryRunner.query(
            `CREATE TABLE "public"."consultorios" ("id" SERIAL NOT NULL, "nome" character varying(255) NOT NULL, "cnpj" character varying(255), "cpf" character varying(255), "celular" character varying(255), "telefone" character varying(255), "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_d49fa6e5198ea5baef006955a35" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "pkey_id_consultorio" ON "public"."consultorios" ("id") `,
        );
        await queryRunner.query(
            `CREATE TABLE "public"."enderecos" ("id" SERIAL NOT NULL, "cep" character varying(255), "rua" character varying(255), "numero" character varying(255), "complemento" text, "bairro" character varying(255), "cidade" character varying(255), "estado" character varying(255), "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "pkey_id_endereco" ON "public"."enderecos" ("id") `,
        );
        await queryRunner.query(
            `CREATE TABLE "public"."especialidades" ("id" SERIAL NOT NULL, "nome" character varying(255), "descricao" character varying(255), "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_73c2740deb4cbe08c28ac487705" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "pkey_id_especialidade" ON "public"."especialidades" ("id") `,
        );
        await queryRunner.query(
            `CREATE TABLE "public"."horarioAtendimentos" ("id" SERIAL NOT NULL, "dia" integer, "horario_ini" TIME, "horario_fim" TIME, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_f7cd1eca144f027026ba4fb4bc7" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "pkey_id_horario_atendimento" ON "public"."horarioAtendimentos" ("id") `,
        );
        await queryRunner.query(
            `CREATE TABLE "public"."profissionais" ("id" SERIAL NOT NULL, "nome_completo" character varying(255) NOT NULL, "cpf" character varying(255), "sobre" text, "numero_conselho" integer, "duracao_atendimento" TIME, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_a6a3048111c78bd06ecd3b1360c" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "pkey_id_profissional" ON "public"."profissionais" ("id") `,
        );
        await queryRunner.query(
            `CREATE TABLE "public"."ufconselhos" ("id" SERIAL NOT NULL, "nome" character varying(255), "codigo" integer, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_05a5be9dc1b994c55a3a603b583" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "pkey_id_ufconselho" ON "public"."ufconselhos" ("id") `,
        );
        await queryRunner.query(
            `CREATE TABLE "public"."usuarios" ("id" SERIAL NOT NULL, "nome_completo" character varying(255) NOT NULL, "senha_hash" text NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX "pkey_id_usuario" ON "public"."usuarios" ("id") `,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."pkey_id_usuario"`);
        await queryRunner.query(`DROP TABLE "public"."usuarios"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_ufconselho"`);
        await queryRunner.query(`DROP TABLE "public"."ufconselhos"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_profissional"`);
        await queryRunner.query(`DROP TABLE "public"."profissionais"`);
        await queryRunner.query(
            `DROP INDEX "public"."pkey_id_horario_atendimento"`,
        );
        await queryRunner.query(`DROP TABLE "public"."horarioAtendimentos"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_especialidade"`);
        await queryRunner.query(`DROP TABLE "public"."especialidades"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_endereco"`);
        await queryRunner.query(`DROP TABLE "public"."enderecos"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_consultorio"`);
        await queryRunner.query(`DROP TABLE "public"."consultorios"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_cliente"`);
        await queryRunner.query(`DROP TABLE "public"."clientes"`);
    }
}
