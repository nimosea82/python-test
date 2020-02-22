from flask import Blueprint
from app.components.analysisOperation import AnalysisForm
from flask import request

analysis = Blueprint('analysis', __name__, url_prefix='/analysis')


# 问卷数据分析蓝图

@analysis.route('/get_result/<flag>', methods=['POST'])
def getResult(flag):
    res = request.json
    form = AnalysisForm(flag)
    form.checkUser(res['token'])
    data = form.getResult()
    return {"status": "success", 'information': data}
