import kotlinx.coroutines.*
import kotlin.system.*

suspend fun sumParallel(): Int = coroutineScope {
    val a = async { f(100, 1) }
    val b = async { f(200, 5) }
    a.await() + b.await()
}

suspend fun f(v: Int, s: Int): Int {
    println("Fetching $v...")
    delay(s * 1000L)
    return v
}

fun main() = runBlocking {
    val result = sumParallel()
    println(result)
}