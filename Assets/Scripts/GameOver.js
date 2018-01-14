#pragma strict
import UnityEngine.UI;

public var pointsText : Text;

function Start () {
	pointsText.text = Pointing.points.ToString();
}

function Update () {
	if(Input.GetMouseButtonDown(0)) {
		Pointing.points = 0;
		SceneManager.LoadScene("Game");
	}	
}
