#pragma strict
import UnityEngine.UI;

//Variables
public static var points: int = 0;
public var pointText: Text;

//Functions
function Start () { }

function Update () {
	pointText.text = points.ToString();
}
