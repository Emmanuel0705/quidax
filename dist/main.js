"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const _modules_1 = require("./modules");
const common_1 = require("@nestjs/common");
const _exception_1 = require("./exception");
const dotenv_1 = require("dotenv");
const swagger_1 = require("@nestjs/swagger");
(0, dotenv_1.config)();
const logger = new common_1.Logger("Main");
async function bootstrap() {
    const app = await core_1.NestFactory.create(_modules_1.default);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("API Endpoints")
        .setDescription("Api examples ")
        .setVersion("1.0")
        .addBearerAuth({ type: "http" }, "API_KEY")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.useGlobalFilters(new _exception_1.default());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const port = process.env.PORT || 3000;
    await app.listen(port);
    logger.log(`Server is listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map