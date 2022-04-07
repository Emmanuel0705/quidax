import { NestFactory } from "@nestjs/core";
import Modules from "@modules";
import { Logger, ValidationPipe } from "@nestjs/common";
import GlobalExceptionHandler from "@exception";
import { config } from "dotenv";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

config();
const logger = new Logger("Main");

async function bootstrap() {
    const app = await NestFactory.create(Modules);

    // swager
    const config = new DocumentBuilder()
        .setTitle("API Endpoints")
        .setDescription("Api examples ")
        .setVersion("1.0")
        .addBearerAuth({ type: "http" }, "API_KEY")

        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    app.useGlobalFilters(new GlobalExceptionHandler());
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        })
    );
    const port = process.env.PORT || 3000;
    await app.listen(port);
    logger.log(`Server is listening on port ${port}`);
}
bootstrap();
