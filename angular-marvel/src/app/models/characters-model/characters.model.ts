export class CharactersModel {
    
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
                    name: string;
                    description: string;
                    modified: Date;
                    resourceURI: string;
                    urls: [{
                        type: string;
                        url: string;
                    }];
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
                    series: {
                        available: number;
                        returned: number;
                        collectionURI: string;
                        items: [{
                            resourceURI: string;
                            name: string;
                        }];
                    };
                }];
            };
     public etag!: string;
      
}