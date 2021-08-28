import {MigrationInterface, QueryRunner} from "typeorm";

export class database1630116496213 implements MigrationInterface {
    name = 'database1630116496213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."enderecos" ("id" SERIAL NOT NULL, "cep" character varying(255), "rua" character varying(255), "numero" integer, "complemento" text, "bairro" character varying(255), "cidade" character varying(120), "estado" character varying(120), "uf" character(2), "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_endereco" ON "public"."enderecos" ("id") `);
        await queryRunner.query(`CREATE TABLE "public"."usuarios" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "senha_hash" text NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_usuario" ON "public"."usuarios" ("id") `);
        await queryRunner.query(`CREATE TABLE "public"."clientes" ("id" SERIAL NOT NULL, "nome_completo" character varying(255) NOT NULL, "cpf" character varying(20), "celular" character varying(20), "telefone" character varying(20), "sexo" character(1), "data_nascimento" date, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', "fk_id_endereco" integer, "fk_id_usuario" integer, CONSTRAINT "REL_976cbf1cdd6c01de38e003a1ee" UNIQUE ("fk_id_endereco"), CONSTRAINT "REL_295900b0be55cb641707d64ac8" UNIQUE ("fk_id_usuario"), CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_cliente" ON "public"."clientes" ("id") `);
        await queryRunner.query(`CREATE TABLE "public"."conselho_regionais" ("id" SERIAL NOT NULL, "nome" character varying(255), "codigo" integer, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_b448e98a6534c23147746e31ae4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_conselho_regional" ON "public"."conselho_regionais" ("id") `);
        await queryRunner.query(`CREATE TABLE "public"."especialidades" ("id" SERIAL NOT NULL, "nome" character varying(255), "descricao" text, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_73c2740deb4cbe08c28ac487705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_especialidade" ON "public"."especialidades" ("id") `);
        await queryRunner.query(`CREATE TABLE "public"."horarioAtendimentos" ("id" SERIAL NOT NULL, "dia" integer, "horario_ini" TIME, "horario_fim" TIME, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', "fk_id_profissional" integer, CONSTRAINT "PK_f7cd1eca144f027026ba4fb4bc7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_horario_atendimento" ON "public"."horarioAtendimentos" ("id") `);
        await queryRunner.query(`CREATE TABLE "public"."ufconselhos" ("id" SERIAL NOT NULL, "nome" character varying(255), "codigo" integer, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_05a5be9dc1b994c55a3a603b583" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_ufconselho" ON "public"."ufconselhos" ("id") `);
        await queryRunner.query(`CREATE TABLE "public"."profissionais" ("id" SERIAL NOT NULL, "nome_completo" character varying(255) NOT NULL, "cpf" character varying(20), "sobre" text, "numero_conselho" integer, "duracao_atendimento" TIME, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', "fk_id_endereco" integer, "fk_id_usuario" integer, "fk_id_especialidade" integer, "fk_id_conselho_regional" integer, "fk_id_uf_conselho" integer, CONSTRAINT "REL_94698e62d46340c94d403be309" UNIQUE ("fk_id_endereco"), CONSTRAINT "REL_d78e9e4126b28e789dcca3a3ce" UNIQUE ("fk_id_usuario"), CONSTRAINT "REL_92a41790219e7f2e56c42db512" UNIQUE ("fk_id_especialidade"), CONSTRAINT "REL_ed70642c57a2673459bb3194c0" UNIQUE ("fk_id_conselho_regional"), CONSTRAINT "REL_ace58e5782a2236064b0e74be3" UNIQUE ("fk_id_uf_conselho"), CONSTRAINT "PK_a6a3048111c78bd06ecd3b1360c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_profissional" ON "public"."profissionais" ("id") `);
        await queryRunner.query(`CREATE TYPE "public"."atendimentos_atendimento_situacao_enum" AS ENUM('Pendente', 'Cancelado', 'Atendido')`);
        await queryRunner.query(`CREATE TABLE "public"."atendimentos" ("id" SERIAL NOT NULL, "link_atendimento" character varying(600), "data_agendamento" TIMESTAMP, "datetime_ini" TIMESTAMP WITH TIME ZONE, "datetime_fim" TIMESTAMP WITH TIME ZONE, "atendimento_situacao" "public"."atendimentos_atendimento_situacao_enum" DEFAULT 'Pendente', "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', "fk_id_atendimento_profissional" integer, "fk_id_atendimento_cliente" integer, CONSTRAINT "PK_80a70d057e68924b970871d9089" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_atendimento" ON "public"."atendimentos" ("id") `);
        await queryRunner.query(`CREATE TABLE "public"."consultorios" ("id" SERIAL NOT NULL, "nome" character varying(255) NOT NULL, "cnpj" character varying(20), "cpf" character varying(20), "celular" character varying(20), "telefone" character varying(20), "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_d49fa6e5198ea5baef006955a35" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_consultorio" ON "public"."consultorios" ("id") `);
        await queryRunner.query(`CREATE TABLE "public"."procedimentos" ("id" SERIAL NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_At" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_5a080ccebecc126c0c62a6b2e19" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "pkey_id_procedimento" ON "public"."procedimentos" ("id") `);
        await queryRunner.query(`ALTER TABLE "public"."clientes" ADD CONSTRAINT "FK_976cbf1cdd6c01de38e003a1ee8" FOREIGN KEY ("fk_id_endereco") REFERENCES "public"."enderecos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."clientes" ADD CONSTRAINT "FK_295900b0be55cb641707d64ac87" FOREIGN KEY ("fk_id_usuario") REFERENCES "public"."usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."horarioAtendimentos" ADD CONSTRAINT "FK_8ce32dd9a80961663dad403d420" FOREIGN KEY ("fk_id_profissional") REFERENCES "public"."profissionais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."profissionais" ADD CONSTRAINT "FK_94698e62d46340c94d403be3091" FOREIGN KEY ("fk_id_endereco") REFERENCES "public"."enderecos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."profissionais" ADD CONSTRAINT "FK_d78e9e4126b28e789dcca3a3ce9" FOREIGN KEY ("fk_id_usuario") REFERENCES "public"."usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."profissionais" ADD CONSTRAINT "FK_92a41790219e7f2e56c42db5128" FOREIGN KEY ("fk_id_especialidade") REFERENCES "public"."especialidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."profissionais" ADD CONSTRAINT "FK_ed70642c57a2673459bb3194c0b" FOREIGN KEY ("fk_id_conselho_regional") REFERENCES "public"."conselho_regionais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."profissionais" ADD CONSTRAINT "FK_ace58e5782a2236064b0e74be34" FOREIGN KEY ("fk_id_uf_conselho") REFERENCES "public"."ufconselhos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."atendimentos" ADD CONSTRAINT "FK_be83cda2073c44036466f44e7ef" FOREIGN KEY ("fk_id_atendimento_profissional") REFERENCES "public"."profissionais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."atendimentos" ADD CONSTRAINT "FK_1d84518dd504bf2f2599bf65a2c" FOREIGN KEY ("fk_id_atendimento_cliente") REFERENCES "public"."clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."atendimentos" DROP CONSTRAINT "FK_1d84518dd504bf2f2599bf65a2c"`);
        await queryRunner.query(`ALTER TABLE "public"."atendimentos" DROP CONSTRAINT "FK_be83cda2073c44036466f44e7ef"`);
        await queryRunner.query(`ALTER TABLE "public"."profissionais" DROP CONSTRAINT "FK_ace58e5782a2236064b0e74be34"`);
        await queryRunner.query(`ALTER TABLE "public"."profissionais" DROP CONSTRAINT "FK_ed70642c57a2673459bb3194c0b"`);
        await queryRunner.query(`ALTER TABLE "public"."profissionais" DROP CONSTRAINT "FK_92a41790219e7f2e56c42db5128"`);
        await queryRunner.query(`ALTER TABLE "public"."profissionais" DROP CONSTRAINT "FK_d78e9e4126b28e789dcca3a3ce9"`);
        await queryRunner.query(`ALTER TABLE "public"."profissionais" DROP CONSTRAINT "FK_94698e62d46340c94d403be3091"`);
        await queryRunner.query(`ALTER TABLE "public"."horarioAtendimentos" DROP CONSTRAINT "FK_8ce32dd9a80961663dad403d420"`);
        await queryRunner.query(`ALTER TABLE "public"."clientes" DROP CONSTRAINT "FK_295900b0be55cb641707d64ac87"`);
        await queryRunner.query(`ALTER TABLE "public"."clientes" DROP CONSTRAINT "FK_976cbf1cdd6c01de38e003a1ee8"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_procedimento"`);
        await queryRunner.query(`DROP TABLE "public"."procedimentos"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_consultorio"`);
        await queryRunner.query(`DROP TABLE "public"."consultorios"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_atendimento"`);
        await queryRunner.query(`DROP TABLE "public"."atendimentos"`);
        await queryRunner.query(`DROP TYPE "public"."atendimentos_atendimento_situacao_enum"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_profissional"`);
        await queryRunner.query(`DROP TABLE "public"."profissionais"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_ufconselho"`);
        await queryRunner.query(`DROP TABLE "public"."ufconselhos"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_horario_atendimento"`);
        await queryRunner.query(`DROP TABLE "public"."horarioAtendimentos"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_especialidade"`);
        await queryRunner.query(`DROP TABLE "public"."especialidades"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_conselho_regional"`);
        await queryRunner.query(`DROP TABLE "public"."conselho_regionais"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_cliente"`);
        await queryRunner.query(`DROP TABLE "public"."clientes"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_usuario"`);
        await queryRunner.query(`DROP TABLE "public"."usuarios"`);
        await queryRunner.query(`DROP INDEX "public"."pkey_id_endereco"`);
        await queryRunner.query(`DROP TABLE "public"."enderecos"`);
    }

}
