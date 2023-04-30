import PouchDB from 'pouchdb';

export const PouchDBSingleton = (function () {
    let instance; // private instance variable

    function init() {
        // private method to initialize the PouchDB instance
        const db = new PouchDB('my_database');

        function importData(data) {
            return db.bulkDocs(data);
        }

        async function getEventsOnDate(date) {
            const dateString = date.toISOString().substring(0, 10);

            try {
                // Query the database for events on the specified date
                const result = await db.query('my_index/by_date', {
                    startkey: dateString,
                    endkey: dateString + '\ufff0',
                    include_docs: true,
                });

                // Map over the result rows to extract the event objects
                const events = result.rows.map((row) => row.doc);

                return events;
            } catch (error) {
                console.error('Error querying data', error);
                return [];
            }
        }

        return {
            // public methods and variables
            getInstance: function () {
                return db;
            },

            importData: importData,

            getEventsOnDate: getEventsOnDate,
        };
    }

    return {
        // public methods and variables
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        },
    };
})();
