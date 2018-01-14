#pragma strict
import UnityEngine.SceneManagement;

function Start () {
	
}

function Update () {
	if(Input.GetMouseButtonDown(0)) {
		SceneManager.LoadScene("Game");
	}
}
