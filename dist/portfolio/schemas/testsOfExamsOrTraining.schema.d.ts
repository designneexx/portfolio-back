/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
import { Duration } from './duration.schema';
export declare class TestsOfExamsOrTraining {
    duration: Duration;
    title: string;
    description: string;
}
export type TestsOfExamsOrTrainingDocument = TestsOfExamsOrTraining & Document;
export declare const TestsOfExamsOrTrainingSchema: import("mongoose").Schema<TestsOfExamsOrTraining, import("mongoose").Model<TestsOfExamsOrTraining, any, any, any, Document<unknown, any, TestsOfExamsOrTraining> & TestsOfExamsOrTraining & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TestsOfExamsOrTraining, Document<unknown, {}, import("mongoose").FlatRecord<TestsOfExamsOrTraining>> & import("mongoose").FlatRecord<TestsOfExamsOrTraining> & {
    _id: import("mongoose").Types.ObjectId;
}>;
