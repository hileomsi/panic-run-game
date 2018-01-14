#pragma strict
import UnityEngine.SceneManagement;

//Variables
public var velocity: float;
private var playerRigidbody: Rigidbody2D;
private var playerSprite: SpriteRenderer;

//Functions
function Start () {
	playerRigidbody	= GetComponent.<Rigidbody2D>();
	playerSprite = GetComponent.<SpriteRenderer>();
}

function Update () {
	if(Input.GetMouseButtonDown(0)) {
		velocity *= -1;
		playerSprite.flipX = !playerSprite.flipX;
	}
	playerRigidbody.velocity = new Vector2(velocity, playerRigidbody.velocity.y);
}

function OnCollisionEnter2D(collision: Collision2D) {
	if(collision.gameObject.tag == "thorn") {
		SceneManager.LoadScene("GameOver");
	}
}

function OnTriggerEnter2D(collision: Collider2D) {
	if(collision.gameObject.tag == "thorn") {
		SceneManager.LoadScene("GameOver");
	}
}
