import express from "express";

function HistoryRouter(spacecraft) {
  const router = express.Router();

  router.get("/:pointId", function (req, res) {
    const start = +req.query.start;
    const end = +req.query.end;
    const ids = req.params.pointId.split(",");

    const response = ids.reduce(function (resp, id) {
      return resp.concat(
        spacecraft.history[id].filter(function (p) {
          return p.timestamp > start && p.timestamp < end;
        })
      );
    }, []);
    res.status(200).json(response).end();
  });

  return router;
}

export default HistoryRouter;
