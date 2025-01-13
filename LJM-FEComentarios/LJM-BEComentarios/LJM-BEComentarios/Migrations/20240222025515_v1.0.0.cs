using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LJM_BEComentarios.Migrations
{
    public partial class v100 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LJMComentario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    LJMTitulo = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    LJMCreador = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    LJMTexto = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    LJMFecha = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LJMComentario", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LJMComentario");
        }
    }
}
