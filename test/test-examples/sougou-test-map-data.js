const sougou =
{
    "id": 0,
    "name": "SougouGakusyuPlaza",
    "spot": [
        {
            "id": 0,
            "name": 101,
            "coordinate": {
                "lat": 33.5954558,
                "lng": 130.2179447
            },
            "floor": 1,
            "shape": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [130.217816, 33.595257], [130.217783, 33.595517], [130.217915, 33.595558], [130.217942, 33.595495]
                    ]
                ]
            },
            "gate_node_ids": [0],
        },
        {
            "id": 10,
            "name": 201,
            "coordinate": {
                "lat": 33.5954558,
                "lng": 130.2179447
            },
            "floor": 2,
            "shape": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [130.217816, 33.595257], [130.217783, 33.595517], [130.217915, 33.595558], [130.217942, 33.595495]
                    ]
                ]
            },
            "gate_node_ids": [10],
            "detail_map_id": "",
            "others": {}
        },
    ],
    "node": [
        {
            "id": 0,
            "map_id": 0,
            "spot_id": 0,
            "coordinate": {
                "lat": 33.5954558,
                "lng": 130.2179447
            },
            "floor": 1
        },
        {
            "id": 10,
            "map_id": 0,
            "spot_id": 10,
            "coordinate": {
                "lat": 33.5954558,
                "lng": 130.2179447
            },
            "floor": 2
        },
    ],
    "edge": [
        {
            "id": 0,
            "node_id": {
                "a": 0,
                "b": 10
            },
            "distance": 1
        },
    ],
    "bounds": {
        "top_l": {
            "lat": 33.5954678,
            "lng": 130.2177802
        },
        "bot_r": {
            "lat": 33.5954678,
            "lng": 130.2177802
        }
    },
}
module.exports = sougou;