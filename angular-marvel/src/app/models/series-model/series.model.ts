export class SeriesModel {
    
    public code!: number;
    public status!: string;
    public copyright!: string;
    public attributionText!: string;
    public attributionHTML!: string;
    public data!: {
            offset: number;
            limit: number;
            total: number;
            count: number;
            results: [{
                id: number;
                title: string;
                description: string;
                resourceURI: string;
                urls: [{
                    type: string;
                    url: string;
                }];
                startYear: number;
                endYear: number;
                rating: string;
                modified: Date;
                thumbnail: {
                    path: string;
                    extension: string;
                };
                comics: {
                    available: number;
                    returned: number;
                    collectionURI: string;
                    items: [{
                        resourceURI: string;
                        name: string;
                    }];
                };
                stories: {
                    available: number;
                    returned: number;
                    collectionURI: string;
                    items: [{
                        resourceURI: string;
                        name: string;
                        type: string;
                    }];
                };
                events: {
                    available: number;
                    returned: number;
                    collectionURI: string;
                    items: [{
                        resourceURI: string;
                        name: string;
                    }];
                };
                characters: {
                    available: number;
                    returned: number;
                    collectionURI: string;
                    items: [{
                        resourceURI: string;
                        name: string;
                        role: string;
                    }];
                };
                creators: {
                    available: number;
                    returned: number;
                    collectionURI: string;
                    items: [{
                        resourceURI: string;
                        name: string;
                        role: string;
                    }];
                };
                next: {
                    resourceURI: string;
                    name: string;
                };
                previous: {
                    resourceURI: string;
                    name: string;
                };
            }];
        };
      public etag!: string;
      }

