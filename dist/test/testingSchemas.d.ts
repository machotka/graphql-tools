import { GraphQLSchema } from 'graphql';
export declare type Property = {
    id: string;
    name: string;
    location: {
        name: string;
    };
};
export declare type Booking = {
    id: string;
    propertyId: string;
    customerId: string;
    startTime: string;
    endTime: string;
};
export declare type Customer = {
    id: string;
    email: string;
    name: string;
    address?: string;
    vehicleId?: string;
};
export declare type Vehicle = {
    id: string;
    licensePlate?: string;
    bikeType?: 'MOUNTAIN' | 'ROAD';
};
export declare const sampleData: {
    Property: {
        [key: string]: Property;
    };
    Booking: {
        [key: string]: Booking;
    };
    Customer: {
        [key: string]: Customer;
    };
    Vehicle: {
        [key: string]: Vehicle;
    };
};
export declare const propertySchema: GraphQLSchema;
export declare const bookingSchema: GraphQLSchema;
export declare const remotePropertySchema: Promise<GraphQLSchema>;
export declare const remoteBookingSchema: Promise<GraphQLSchema>;
